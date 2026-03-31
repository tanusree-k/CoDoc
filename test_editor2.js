const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => fs.appendFileSync('test_logs2.txt', `LOG: ${msg.text()}\n`));
    page.on('pageerror', error => fs.appendFileSync('test_logs2.txt', `PAGE_ERROR: ${error.message}\n`));
    page.on('requestfailed', request => fs.appendFileSync('test_logs2.txt', `REQ_FAIL: ${request.url()} ${request.failure()?.errorText}\n`));
    
    fs.writeFileSync('test_logs2.txt', 'Starting test...\n');
    
    await page.goto('http://localhost:3000/auth.html', {waitUntil: 'networkidle2'});
    
    await page.waitForSelector('#si-email', {timeout: 5000});
    await page.type('#si-email', 'tester' + Date.now() + '@example.com');
    await page.type('#si-password', 'password123');
    await page.click('#tab-signup');
    await new Promise(r => setTimeout(r, 500));
    
    await page.type('#su-username', 'testuser');
    await page.type('#su-email', 'tester' + Date.now() + '@example.com');
    await page.type('#su-password', 'password123');
    await page.click('#form-signup button[type="submit"]');
    
    await page.waitForNavigation({waitUntil: 'networkidle2'});
    
    await page.waitForSelector('#new-doc-btn');
    await page.click('#new-doc-btn');
    await page.waitForSelector('#new-doc-title', {visible: true});
    await page.type('#new-doc-title', 'Test doc');
    await page.keyboard.press('Enter');
    
    await page.waitForNavigation();
    
    await new Promise(r => setTimeout(r, 2000));
    
    const title = await page.$eval('#doc-title', el => el.value).catch(()=>'not found');
    fs.appendFileSync('test_logs2.txt', `Finished navigating. Document Title: ${title}\n`);
    
    await browser.close();
  } catch(e) {
    fs.appendFileSync('test_logs2.txt', `SCRIPT_ERROR: ${e.message}\n`);
    process.exit(1);
  }
})();
