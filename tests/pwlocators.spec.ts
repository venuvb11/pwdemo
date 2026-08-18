
/*
    Locator - Identifies the elements on the Pgae
    DOM - Document Object Model
    DOM - is an API Interface provided by browser.

    1) page.getByRole() to locate by explicit and implicit accessibility attributes.
    2) page.getByText() to locate by text content.
    3) page.getByLabel() to locate a form control by associated label's text.
    4) page.getByPlaceholder() to locate an input by placeholder.
    5) page.getByAltText() to locate an element, usually image, by its text alternative.
    6) page.getByTitle() to locate an element by its title attribute.
    7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
import {test, expect, Locator} from "@playwright/test"

test("verify Playwright Locators", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/")
    // page.getByAltText() to locate an element, usually image, by its text alternative.
    //Use this locator when your element supports alt text such as img and aree elements.

    const logo:Locator =  page.getByAltText("nopCommerce demo store")
    //logo.click()
    await expect(logo).toBeVisible();

    //2) page.getByText() to locate by text content. Find an element by the text it contains. You can match by a substring, exact string, or a regular expression.
    //Locate by visible text
    // Use this locator to find non interactive elements like div, span, p, etc.
    //For interactive elements like button, a, input, etc. use role locator.

    /*
    <p>welcome</p>
    <h2>hello</h2>
    */

    //const text:Locator= page.getByText("Welcome to our store")
    //await expect(text).toBeVisible();

    //await expect(page.getByText("Welcome to our store")).toBeVisible() //Full String
    //await expect(page.getByText("Welcome to")).toBeVisible()  //Provided Substring

    await expect(page.getByText(/Welcome\s+To\s+Our\sStore/i)).toBeVisible()  //Regular Expressions
    //console.log()

    /*
    1) page.getByRole()- To Locate By Role (Role is an Attribute) to locate by explicit and implicit accessibility attributes.
    Role locators include button, checkboxs, headings, links, lists, tables, and
    many moreand follow w3c specifications for ARIA role.
    prefere for interactive elements like button, checkboxes, links, lists, headings, tables, etc.

    */

    //await page.getByRole("link", {name:'Register'}).click();
    //await expect(page.getByRole("heading", {name:'Register'})).toBeVisible(); //You can also use getByText

    await page.getByRole('link', { name: 'Register' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    
    //3) page.getByLabel() to locate a form control by associated label's text.

    //page.getByLabel('First name:').type("John") //type is deprectd
    await page.getByLabel('First name:').fill("John");
    await page.getByLabel('Last name:').fill("Kenedy");
    await page.getByLabel('Email:').fill("abc@gmail.com");
    

    //4) page.getByPlaceholder() - to locate an input by placeholder.
    //Finds elements with a given placeholder text.
    //Best for inputs without a label but  having a placeholder

    await page.getByPlaceholder("Search store").fill('Apple MacBook Pro');

    // 6) page.getByTitle() to locate an element by its title attribute.
    //When to use: when your element has a meaning full title attriute

    await page.goto("file:////c:/users/pavan/onedriver/Desktop/playwrightlocators.html")
    //const link: Locator=page.getByTitle("Home Page Link")
    //expect(link).toHaveText("Home")

    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByText("HyperText Markup Language")).toHaveText("HTML");


})