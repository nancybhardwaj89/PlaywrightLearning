import { chromium, Page, Browser, FrameLocator, Locator } from "@playwright/test";

(async () => {
    // Launch browser in headed mode using Chrome
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://petdiseasealerts.org/forecast-map#/', { waitUntil: 'load' });
    await page.waitForTimeout(3000);
    let frameEle: FrameLocator = page.frameLocator(`iframe[id*='map-instance']`);
    let allStates: Locator[] = await frameEle.locator(`//*[local-name()='svg']//*[local-name()='g' and @id='regions']/*[local-name()='g']`).all();
    console.log('All states are:' + allStates.length);
    //Print Id of each state
    for (let e of allStates) {
        let box = await e.boundingBox()
        if (box) {
            await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); //middle/center of the bounding box of the element
            await page.waitForTimeout(100);

        }
        //await e.hover();
        let stateName = await e.getAttribute('id');
        console.log(stateName);
        await page.waitForTimeout(100);
    }
})
    ();