import { chromium, Page, Browser, Locator, expect } from '@playwright/test'
import { time } from 'node:console';
(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/selectdropdowns.html');
    let country: Locator = page.locator('#country');
    let experince: Locator = page.locator('#experience');
    let industry: Locator = page.locator('#industry');
    let projextSize: Locator = page.locator('#project-size');
    let preferCommStyle: Locator = page.locator('#communication');
    let timezone: Locator = page.locator('#timezone');
    // Select dropdown options using Visible Text (Label)
    await selectByvisibletext(country, 'Australia');
    await selectByvisibletext(experince, 'Intermediate (2-4 years)');
    await selectByvisibletext(industry, 'Education & Training');
    await selectByvisibletext(projextSize, 'Large Team (21-100 people)');
    await selectByvisibletext(preferCommStyle, 'Concise and to-the-point');
    await selectByvisibletext(timezone, 'Eastern Standard Time (EST)');
    // Pause added for demo/visual validation purposes
    await page.waitForTimeout(5000);
    // Select dropdown options using Value attribute
    await selectByValue(country, 'ca');
    await selectByValue(experince, 'expert');
    await selectByValue(industry, 'finance');
    await selectByValue(projextSize, 'small-team');
    await selectByValue(preferCommStyle, 'detailed');
    await selectByValue(timezone, 'mst');
    // Pause added for demo/visual validation purposes
    await page.waitForTimeout(6000);
    // Select dropdown options using Index
    await selectByIndex(country, 1);
    await selectByIndex(experince, 5);
    await selectByIndex(industry, 3);
    await selectByIndex(projextSize, 2);
    await selectByIndex(preferCommStyle, 5);
    await selectByIndex(timezone, 6);
})
    ();
// Generic function to select dropdown option by Visible Text (Label)
async function selectByvisibletext(element: Locator, labelvalue: string): Promise<void> {
    await element.selectOption({ label: labelvalue })
    let selectedValue: string = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}
// Generic function to select dropdown option by Value attribute
async function selectByValue(element: Locator, value: string): Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
}
// Generic function to select dropdown option by Index
// Use this approach only when dropdown options are fixed
async function selectByIndex(element: Locator, indexvalue: number): Promise<void> {
    await element.selectOption({ index: indexvalue });
    let selectedvalue: string = await element.inputValue();
    await expect(element).toHaveValue(selectedvalue);
}