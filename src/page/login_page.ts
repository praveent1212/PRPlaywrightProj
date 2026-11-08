import {Page, Locator} from '@playwright/test'

export class LoginPage{
    private readonly page : Page

    private readonly lbl_username: Locator
    private readonly lbl_password : Locator
    private readonly btn_login: Locator

constructor(page: Page){
    this.page = page

    this.lbl_username = page.locator("//input[@name='username']")
    this.lbl_password = page.locator("//input[@type='password']")
    this.btn_login = page.getByRole('button', {'name': "Log In"})
}

public async fun_DrloginUrl(Url: string){
    await this.page.goto(Url)
    await this.page.waitForLoadState("networkidle")
}

public async fun_DrLogin(username: string, password: string){
    await this.lbl_username.fill(username)
    await this.lbl_password.fill(password)
    await this.btn_login.click()
    await this.page.waitForTimeout(30000)
}

}