locate - xpath
getbyRole = button
label - getByTestID -  


============================
SF: 

 log SF -  URL: Developer Edition: 
		https://orgfarm-465de1ccfa-dev-ed.develop.my.salesforce.com
	 
login:  
praveen.t1212.702510e91195@agentforce.com

password:  PRdatacloud@123

=========Session storage:========================
await context.storageState({ path: 'sf-profile/state.json' })


===============update my test==============
console.log('Before storage state save');

await page.context().storageState({
    path: 'sf-profile/state.json'
});

console.log('After storage state save');


terminal:
npx playwright test createaccount.spec.ts --project=chromium --headed

=======================================

=========run the test====

 npx playwright test createaccount.spec.ts --project=chromium --headed

 ==========================
FUNCTION OVERLOADING : same function name differ by
 - number of parameters // example: add(a:number, b:number)    add(a:number, b:number, c:number)  - TYpe script will not allow this type of function overloading.
 - type of parameters   // example: add(a:number, b:strig)     add(a:number, b:)
 example: add(a:number, b:number)   add(a:string, b:string)
 - order of parameters  // 

 ==============================================