import { Page, Browser, chromium, Locator, expect } from '@playwright/test'

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    let day: Locator = page.locator('#day');
    let month: Locator = page.locator('#month');
    let year: Locator = page.locator('#year');

    // selecy by value attribute - Second Perference
    // await day.selectOption('5');
    // await month.selectOption('10');
    // await year.selectOption('2023');
    // await page.waitForTimeout(9000);
    // select by visible text (label) - First perference
    // await day.selectOption({ label: '15' });
    // await month.selectOption({ label: 'Aug' });
    // await year.selectOption({ label: '2025' });
    // await page.waitForTimeout(9000);
    // select by Index - 3rd perference, can be used only when fixed data is available.
    // await day.selectOption({index: 1});
    // await month.selectOption({index: 11});
    // await year.selectOption({index: 3});

    await selectdropdownbyValue(day, '5');
    await selectdropdownbyValue(month, '2');
    await selectdropdownbyValue(year, '2025');

    await page.waitForTimeout(8000);

    await selectdropdownByVisibleText(day, '15');
    await selectdropdownByVisibleText(month, 'Jun');
    await selectdropdownByVisibleText(year, '2023');
})

    ();
//Generic Functions
async function selectdropdownbyValue(element: Locator, value: string): Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
}

async function selectdropdownByVisibleText(element: Locator, labelvalue: string): Promise<void> {
    await element.selectOption({ label: labelvalue });
    let selectedvalue: string = await element.inputValue();
    await expect(element).toHaveValue(selectedvalue);

}

async function selectdropdownByIndex(element: Locator, indexvalue: number): Promise<void> {
    await element.selectOption({ index: indexvalue });
    let selectedvalue: string = await element.inputValue();
    await expect(element).toHaveValue(selectedvalue);

}





