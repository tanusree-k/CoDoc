const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page1 = await browser.newPage();
  const page2 = await browser.newPage();

  // Create doc on page 1
  await page1.goto('http://localhost:3000/auth.html');
  await page1.type('input[type="email"]', 'u1@ex.com');
  await page1.type('input[type="password"]', 'pass');
  await page1.click('button[type="submit"]');
  await page1.waitForNavigation();
  
  await page1.click('#new-doc-btn');
  await page1.waitForSelector('#new-doc-title', {visible: true});
  await page1.type('#new-doc-title', 'Sync Test');
  await page1.keyboard.press('Enter');
  await page1.waitForNavigation();
  
  const docUrl = page1.url();
  console.log('Doc URL:', docUrl);
  
  // Login user 2
  await page2.goto('http://localhost:3000/auth.html');
  await page2.type('input[type="email"]', 'u2@ex.com');
  await page2.type('input[type="password"]', 'pass');
  await page2.click('button[type="submit"]');
  await page2.waitForNavigation();
  
  // page 2 joins
  await page2.goto(docUrl);
  await page2.waitForSelector('.ql-editor');
  
  await new Promise(r => setTimeout(r, 2000));
  
  // page 1 types
  await page1.type('.ql-editor', 'Hello from User 1! ');
  await new Promise(r => setTimeout(r, 1000));
  
  // check page 2
  const text2 = await page2.$eval('.ql-editor', el => el.textContent);
  console.log('User 2 sees:', text2);
  
  await browser.close();
})();
