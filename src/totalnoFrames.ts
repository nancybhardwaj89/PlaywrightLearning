import { chromium, Page, Browser, FrameLocator, Locator } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    //Print total number of frames
    let totalframes: Locator[] = await page.locator(`//frame`).all();
    console.log("totl frames:" + totalframes.length);

    for (let frameEle of totalframes) {
        console.log(await frameEle.getAttribute('name'), ":", await frameEle.getAttribute('src'));


    }
    //New method - we can use to find total frames on the page
    //page.frames().lenth;

})
    ();