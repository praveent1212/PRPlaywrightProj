// OOPS: Inheritance(5), Polymorphisam, Aggregration, Interface, Abstraction, Encapsulation
// Assume 5 SF pages: Lead, Account, Contact, Opportunity, Quote - create 5 classes
// for Lead class create "createLead" method and "leadName", LeadID - 2  variables assign values.
// Account page - 1 method ( create ) with 2 variables (ID and Name) and pass values in run time.
// contact page - 1 methods (create,) with mixed array and set Data types (ID and Name) & inherit Account page
// opportunity page - 1 methods (Create), inherit contact page and variable (ID, Name & Status) using Tuple
// Quote page - 1 method (Create), inherit all pages, variable (ID, Amount, status: Pass/Fail), using Inheritance

//=======Lead==============

class Lead{
    public ceateLead(leadName: string): string{
        return leadName
    }
}

//const NewLead = new Lead()
//console.log(NewLead.ceateLead("Lead001"))

//==========Account======================

class Account{
    public createAccount(accountName: string, accountID: number): string{
       return "AccountName:" + accountName + "  " +"AccountID:" + accountID
    }
}

//const NewAccount = new Account()
//console.log(NewAccount.createAccount("Account001", 11111))

//======Contact==================

const contactID : number[] = [1011, 2022, 1011]  // Array Number

class Contact {
contactName : string []= ["David", "Mark", "David"]  // Set Array string  

public createContact(contactID:number[], contactName:string[]): string[] {
const contactPhNo = new Set<number>  // Set Array number
    contactPhNo.add(9876542211)
    contactPhNo.add(8978978222)
    contactPhNo.add(8978978333)

    const contactRecord: string[] = []
    for(let recordCount=0; recordCount<contactName.length; recordCount++){
       const newContactRecord = `ContactID: ${contactID[recordCount]}, ContactName: ${contactName[recordCount]}`;
        contactRecord.push(newContactRecord)
    }
    return contactRecord
    }
}

const newContact = new Contact()
console.log(newContact.createContact(contactID, newContact.contactName))


//======Opportunity=================

class Opportunity {
    public createOpportunity(opportunityName: string, opportunityNo: number){

    }
}


//const newOpportunity = new Opportunity()
//console.log(newOpportunity.createOpportunity)

//==============End===============








