import {test, expect, Locator} from "@playwright/test";

test("XPath demo in playwright", async({page})=>{

    await page.goto("https://demowebshop.tricemtis.com/");

    //1. Absolute xpath - logo

    const  absolutelogo:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/a[1]/img[1]")
    //  //# 1st way
    //const  absolutelogo:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/a[1]/img[1]") #2nd Way
    await expect(absolutelogo).toBeVisible();

    //2. Relative xpath - logo
    const  relativelogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(relativelogo).toBeVisible();


    //3. Contains()

    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    
    const productsCount: number = await products.count();
    console.log("No of Computer related Products: ", productsCount) //4
    expect(productsCount).toBeGreaterThan(0);

    //console.log(await products.allTextContents());

    console.log("First Computer related product: ", await products.first().textContent());
    console.log("First Computer related product: ", await products.last().textContent());
    console.log("First Computer related product: ", await products.nth(3).textContent());
})