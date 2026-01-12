import { Page, Browser, chromium, expect } from '@playwright/test';


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    let source = page.locator(`#column-a`);
    let destination = page.locator(`#column-b`);
    await source.dragTo(destination);
    await expect(destination).toContainText('A');
}
)
    ();