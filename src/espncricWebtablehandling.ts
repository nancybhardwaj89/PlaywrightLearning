import { chromium, Page, Browser } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.espncricinfo.com/series/big-bash-league-2025-26-1490534/melbourne-stars-vs-melbourne-renegades-22nd-match-1493259/full-scorecard');

    let wicketTakerName = await getWicketTakerName(page, 'Glenn Maxwell');
    // let wicketTakerName1 = await getWicketTakerName(page, ' Haris Rauf');
    console.log(wicketTakerName);
    // console.log("Wicket taken by:" + wicketTakerName1);
    let noutoutplayer = await getNotoutPlayer(page, 'Haris Rauf');
    console.log(noutoutplayer);
})
    ();
//generic function

async function getWicketTakerName(page: Page, username: string): Promise<string[]> {
    return await page.locator(`//a[@title='${username}']/ancestor::td/following-sibling::td//span//span`).allInnerTexts();
}

// ////a[@title='Haris Rauf']/ancestor::td/following-sibling::td[@class='ds-min-w-max !ds-pl-[100px]']
//Generic Function for Not Out player
async function getNotoutPlayer(page: Page, username: string): Promise<string[]> {
    return await page.locator(`//a[@title='${username}']/ancestor::td/following-sibling::td[@class='ds-min-w-max !ds-pl-[100px]']`).allInnerTexts();

}

