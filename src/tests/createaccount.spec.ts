import {test, expect} from '@playwright/test'
import {LoginPage} from '../page/login_page'

//await context.storageState({ path: 'sf-profile/state.json' })

test("create account", async ({page}) =>{
const loginobj = new LoginPage(page)
await loginobj.fun_sfloginUrl("https://orgfarm-465de1ccfa-dev-ed.develop.my.salesforce.com")
await loginobj.fun_PrLogin("praveen.t1212.702510e91195@agentforce.com", "PRdatacloud@123")

   // Complete MFA here manually if prompted
console.log('Before storage state save');

    await page.context().storageState({
        path: 'sf-profile/state.json'
    })


console.log('After storage state save');

})

