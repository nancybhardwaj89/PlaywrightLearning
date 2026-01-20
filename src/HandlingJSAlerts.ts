import { chromium, Page, Browser } from "@playwright/test";

(async () => {
    // Launch browser in headed mode using Chrome
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
     /**
     * Dialog Event Listener
     * - Registers immediately after page initialization
     * - Runs continuously in the background throughout the session
     * - Automatically triggers when any JavaScript dialog appears
     * - Terminates only when the browser is closed
     */
    page.on('dialog', async dialog => {
        // Log the dialog message to console
        console.log(dialog.message());
        // Accept the dialog (equivalent to clicking "OK")
        // For prompt dialogs, you can pass a value as the second parameter
        await dialog.accept('Test Automation');
        // Alternative: Dismiss the dialog (equivalent to clicking "Cancel")
        //await dialog.dismiss();
         // Log the type of dialog (alert, confirm, or prompt)
        console.log(dialog.type());
        console.log('--------');
    }
    );
    // Navigate to the demo page
    await page.goto('https://testpages.herokuapp.com/pages/basics/alerts-javascript/');
    await page.getByText('Show alert box').click();
    await page.getByText('Show confirm box').click();
    await page.getByText('Show prompt box').click();
    // Close the browser
    await browser.close();
})
    ();