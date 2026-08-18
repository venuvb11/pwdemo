import {test, expect} from "@playwright/test";

//Syntax:
/*
test("title", ()=>{

    //Step 1

    //Step 2
})

*/

//fixture -global variable : page, browser

test("verify page url", async ({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php");

    let url = await page.url();
    console.log("Title: ", url)

    await expect(page).toHaveURL(/automationpractice/);

})
