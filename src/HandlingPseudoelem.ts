import { chromium, Page, Browser, FrameLocator, Locator } from "@playwright/test";

(async () => {
    // Launch browser in headed mode using Chrome
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //Pseudo Elements
    //1. having no html tag and no attirbutes
    //2. :: before, ::after (its a pseduo class)
    //3. pseduo class

    //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')
    let contentval = await page.evaluate(() => {

        return window.getComputedStyle
            (document.querySelector('label[for="input-firstname"]')!,
                '::before')
            .getPropertyValue('content')
    }
    )
    console.log("Content Valueis:" + contentval);
    if (contentval.includes('*')) {
        console.log('First Name is required');
    }
})
    ();