import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    const objfs = 'Estudar automação'

    await request.delete('http://localhost:3333/helper/tasks/' + objfs)

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    //await inputTaskName.fill(faker.music.songName())
    await inputTaskName.fill(objfs)

    await page.click('xpath=//button[contains(text(), "Create")]')
    // await page.click('css=button >> text=Create')    


    await page.pause();
})