import { Page, Browser, chromium, expect } from '@playwright/test';


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://api.jquery.com/dblclick/');
   let framele = await page.frameLocator(`iframe`);
   let box = await framele.locator(`div`);
   //Using dbl click method
   //box.dblclick();

   //using click count method

   await box.click({clickCount: 2});
}
)
    ();