// import is used to call the classes from other file or Library.
// Here Page and Locater or predefined classes called from @playwright.test library
import {Page, Locator} from '@playwright/test'

class SfOrgfarm{
   
//Declaring Instance variables
    private readonly  login : Page     

    private readonly lbl_user: Locator   
    private readonly lbl_password: Locator
    private readonly btn_login: Locator


// constructor is a method 
// orgfarm is a variable
// Page is datatype
// Instance variable with in the class will call wwith keywoard - this.
//Locating the variable with xpath. Initializing, assigning with = operator
//locator is a method to locate the variable with xpath

constructor( orgfarm : Page){
        this.login = orgfarm
        this.lbl_user = orgfarm.lo

    this.lbl_password = orgfarm.locator('//@<input>:id="password"')
    this.btn_login = orgfarm.locator('//@<input>:id="Login"')


}

}