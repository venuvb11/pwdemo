import {test, expect} from "@playwright/test";

//Syntax:
/*
test("title", ()=>{

    //Step 1

    //Step 2
})

*/

//fixture -global variable : page, browser

test("verify page title", async ({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php");

    let title = await page.title();
    console.log("Ttitle: ", title)

    await expect(page).toHaveTitle("My Shop");

})
