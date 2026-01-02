import { Browser, chromium, Page } from '@playwright/test'
import { promises } from 'node:dns';

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    ////td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    //await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();

    await selectUser(page, 'Joe.Root');
    //await selectUserasCSS(page, 'John.Smith');
    //CSS
    // await page.locator(`tr:has(td:text('John.Smith'))`).locator(`td`).nth(0).click();

    //async function selectUserasCSS(page: Page, username: String): Promise<void> {
    // await page.locator(`tr:has(td:text('${username}'))`).locator(`td`).nth(0).click();

    // }
    //Get all the column data values
    //let userdata: string[] = await page.locator(`//td[text()='Joe.Root']/following-sibling::td`).allInnerTexts();
    //console.log(userdata);

    let JoeData = await getUserData(page, 'Joe.Root');
    console.log(JoeData);

})
    ();
/**
 * thi methods return user data from other columns
 * @param page
 * @param username
 * @returns
 * */

//Generic function for get all user data
async function getUserData(page: Page, username: string): Promise<string[]> {
    //let userdata: string[] = await page.locator(`//td[text()='Joe.Root']/following-sibling::td`).allInnerTexts();
    //return userdata;
    return await page.locator(`//td[text()='${username}']/following-sibling::td`).allInnerTexts();
}

//Generic function

async function selectUser(page: Page, username: String): Promise<void> {
    await page.locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();

}

