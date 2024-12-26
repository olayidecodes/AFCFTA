const { test, expect } = require('@playwright/test')

test.describe('Sign up tests', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://platform-frontend-sigma.vercel.app/signup')
    })
    
    test('should successfully register with valid details', async ({ page }) => {
        await expect(page.locator('text=Sign up')).toBeVisible()

        await page.locator('label[for="1"]').click()
    });
    
})