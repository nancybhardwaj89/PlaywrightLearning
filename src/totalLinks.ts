import { chromium, Page, Browser, Locator } from "@playwright/test";

//
(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.nykaafashion.com/');
    //Total lnks on the page
    let allLinks: String[] = await page.locator('a[href]').allInnerTexts();
    console.log('Total Links:' + allLinks.length);

    //Total number of images
    let totalimages: Locator[] = await page.locator('//img[@alt]').all();
    console.log('Total Images are:' + totalimages.length);

    for(let e of totalimages)
    {
        console.log(await e.getAttribute('alt')); 
     }
})
    ();