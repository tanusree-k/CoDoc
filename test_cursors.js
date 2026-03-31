const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page1 = await browser.newPage();
        const page2 = await browser.newPage();

        // Create doc on page 1
        await page1.goto('http://localhost:3000/auth.html');
        await page1.type('input[type="email"]', 'u1@ex.com');
        await page1.type('input[type="password"]', 'pass');
        await page1.click('button[type="submit"]');
        await page1.waitForNavigation();
        
        await page1.waitForSelector('#new-doc-btn');
        await page1.click('#new-doc-btn');
        await page1.waitForSelector('#new-doc-title', {visible: true});
        await page1.type('#new-doc-title', 'Cursor Test');
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
        
        // user 1 types and sets cursor
        await page1.focus('.ql-editor');
        await page1.type('.ql-editor', 'Hel');
        
        await new Promise(r => setTimeout(r, 1000));

        // check if user 2 sees user 1's cursor
        const cursors = await page2.$$eval('.ql-cursor', els => els.map(el => el.className));
        console.log('Cursors seen by user 2:', cursors);

        await browser.close();
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
})();
