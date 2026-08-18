import {test, expect, Locator} from "@playwright/test"

test('test Input Actions', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox: Locator = page.locator('#name');

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLength: string | null = await textBox.getAttribute("maxlength"); //Return value of max lenth attribute of the element
    expect(maxLength).toBe('15');

});