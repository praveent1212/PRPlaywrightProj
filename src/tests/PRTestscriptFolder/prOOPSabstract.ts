// OOPS: concepts

//===========Leads==================

interface Lead{
    leadName : string  // this is property as we declared in interface
    createLead() : void
}

class Opportunity implements Lead{
    leadName = "Praveen"
    createLead() : void {
        console.log("metod create lead")
    }
}

const leadRecord = new Opportunity
console.log(leadRecord.leadName)



//==========Account======================

class Account{
    public createAccount(){
        console.log("Create Account Public Method")
    }
    protected editAccount(){
        console.log("Edit Account Protected Method")
    }
    private deleteAccount(){
        console.log("delete Account Privae Method")
    }
}

//======Contact==================

class Contact extends Account{
    public createContact(){
        console.log("Create Contact Public Method")

        //const createAccContactRecord = new Account // defining Obj to call Account class
        //createAccContactRecord.createAccount()  // calling Public method from Account class
       
    }
    protected editContact(){
        console.log("Edit Contact Protected Method")
        
        this.editAccount //calling Protect method from Account class
    }
    private deleteContact(){
        console.log("delete Contact Private Method")
    }
}

//const results = new Contact
//results.createAccount()
//results.createContact()


//==============End===============








