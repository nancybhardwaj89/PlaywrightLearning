import { chromium, Page, Browser, FrameLocator } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    //iframe will be loaded
    let frameEle: FrameLocator = page.frameLocator(`//iframe[@id='frame-one748593425']`);
    frameEle.locator(`#RESULT_TextField-1`).fill('Testing');

    let header = await page.locator('h3.details__form-preview-title').innerText();
    console.log(header);
})
    ();