import { test, Browser, chromium, Page, Locator } from '@playwright/test';

//IIFE
(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let rightpanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightpanelLinks.length);
    console.log(rightpanelLinks);
    //for..of loop
    for (let e of rightpanelLinks) {
        console.log(e);
        if (e === 'Forgotten Password') {
            await page.getByText(e).click();
            break;
        }
    }

    //index
    for(let i=0; i<rightpanelLinks.length; i++)
    {
        console.log(rightpanelLinks[i]);
    }

    //capture all the footers
    let footerlinks:Locator[]  = await page.locator('footer a').all()
    console.log(footerlinks.length);
    for(let e of footerlinks)
    {
        console.log(await e.innerText());

    }









}
)
    ();