import { chromium, Page, Browser } from "@playwright/test";

(async () => 
{
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    /**
     * Dialog Event Listener
     * - Registers immediately after page initialization
     * - Runs continuously in the background throughout the session
     * - Automatically triggers when any JavaScript dialog appears
     * - Terminates only when the browser is closed
     */
    page.on('dialog', async dialog =>
    {
        console.log(dialog.message());
       await dialog.accept('Test Automation');// accpet the alert - click on OK
       //await dialog.dismiss(); // dismiss the alert
       console.log(dialog.type());
       console.log('--------');
    }
    );
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByText('Click for JS Alert').click();
    await page.getByText('Click for JS Confirm').click();
    await page.getByText('Click for JS Prompt').click();
     // Close the browser
    await browser.close();
})
();