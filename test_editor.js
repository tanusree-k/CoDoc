const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Log all errors during execution to file so we can see what failed
    const fs = require('fs');
    page.on('console', msg => fs.appendFileSync('test_logs.txt', `LOG: ${msg.text()}\n`));
    page.on('pageerror', error => fs.appendFileSync('test_logs.txt', `PAGE_ERROR: ${error.message}\n`));
    page.on('requestfailed', request => fs.appendFileSync('test_logs.txt', `REQ_FAIL: ${request.url()} ${request.failure()?.errorText}\n`));
    
    fs.writeFileSync('test_logs.txt', 'Starting test...\n');
    
    // Auth
    await page.goto('http://localhost:3000/auth.html');
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', 'test' + Date.now() + '@example.com');
    await page.type('input[type="password"]', 'password123');
    
    const tabs = await page.$$('.auth-tab');
    if(tabs.length > 1) await tabs[1].click(); // switch to signup just in case
    
    const idInput = await page.$('#username');
    if(idInput) await page.type('#username', 'tester');
    
    await page.click('button[type="submit"]');
    await page.waitForNavigation({waitUntil: 'networkidle2'});
    
    // Dashboard
    await page.waitForSelector('#new-doc-btn');
    await page.click('#new-doc-btn');
    await page.waitForSelector('#new-doc-title', {visible: true});
    await page.type('#new-doc-title', 'Test doc');
    await page.keyboard.press('Enter');
    
    // Editor page
    await page.waitForNavigation();
    
    // Wait for everything to load
    await new Promise(r => setTimeout(r, 2000));
    
    fs.appendFileSync('test_logs.txt', `Finished navigating. Document Title: ${await page.$eval('#doc-title', el => el.value).catch(()=>'error')}\n`);
    
    await browser.close();
  } catch(e) {
    const fs = require('fs');
    fs.appendFileSync('test_logs.txt', `SCRIPT_ERROR: ${e.message}\n`);
    process.exit(1);
  }
})();
