import { test, expect } from '@playwright/test'

test('o preograma deve estar online', async ({ page }) => {

    await page.goto('http://localhost:8080')
    await expect(page).toHaveTitle('Gerencie suas tarefas com mark L')
    await page.waitForTimeout(3000)

})