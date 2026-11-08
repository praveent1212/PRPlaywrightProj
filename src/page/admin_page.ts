import { Page, Locator } from "@playwright/test";

class AdminPage{
private readonly page: Page

private readonly lbl_welcome_miaaviadmin: Locator

//private readonly lbl_search_doctor: Locator
//private readonly delete buttons

private readonly btn_plus_add_doctor: Locator
private readonly lbl_popup_header: Locator

private readonly lbl_doc_name: Locator
private readonly drp_specialization: Locator
private readonly drp_location: Locator
private readonly lbl_doc_email: Locator
private readonly lbl_doc_phonenumber: Locator
private readonly btn_add_doctor: Locator

    constructor (page: Page){
        this.page = page

        this.lbl_welcome_miaaviadmin = page.getByTestId('admin-username') //
        this.btn_plus_add_doctor = page.getByRole("button", {name: "+ Add Doctor"} )
        this.lbl_popup_header = page.getByText('Add New Doctor') 
        this.lbl_doc_name = page.getByLabel('Name *')
        this.drp_specialization = page.locator("//label[@data-testid="label-doctor-specialization"]")
        this.drp_location = page.getByTestId('select-doctor-locator')
        this.lbl_doc_email = page.locator("//label[@data-testid="label-doctor-email"]") 
        this.lbl_doc_phonenumber = page.getByTestId('input-doctor-phone')
        this.btn_add_doctor = page.getByTestId("submit-doctor-button"), 

        public async verify_miaavi_admin(): Promise<boolean>{
            return await this.lbl_welcome_miaaviadmin.isVisible()
            
    }

        public async fun_add_doctor(doc_name_value: string, doc_specilization_vallue: string, doc_location: string){

        }

        public async fun_search_doctor(){

        }

    }
}