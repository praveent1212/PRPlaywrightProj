
//== Array ==Parameterisation=== for loop ====if condition=========xxxx=========


const accountID : number[] = [1011 , 2022, 3033, 4044, 5055]

class leadtocash{

    LeadName : string[] = ["PRlead001", "PRLead002", "PRLead003", "PRLead004", "PRLead005"]
    LeadStatus: string[] = ["Active1", "Inactive2", "Active3", "Active4", "Inactive5"]

    public leadcreationloop(accountID: number[], LeadName: string[], LeadStatus: string[]): string[]{
        const leadrecord: string[] = []
        for (let leadcount = 0; leadcount < LeadName.length; leadcount++){
         if  (!LeadStatus[leadcount].startsWith("Inactive")){
            const createleadrecord = "AccountID:" + accountID[leadcount] + "LeadName:" + LeadName[leadcount] + "LeadStatus:" + LeadStatus[leadcount]
            //const createleadrecord = `AccountID: ${accountID[leadcount]}, LeadName: ${LeadName[leadcount]}, Status: ${LeadStatus[leadcount]}`
            leadrecord.push(createleadrecord)
     }
    }
        return leadrecord
    }
}

const lead = new leadtocash()
const newlead: string[] = lead.leadcreationloop(accountID, lead.LeadName, lead.LeadStatus)
console.log(newlead)


// Array ==Parameterisation=== forEach ==============xx

/*
const accountID : number[] = [1011 , 2022, 3033, 4044, 5055]

class leadtocash{

    LeadName : string[] = ["PRlead001", "PRLead002", "PRLead003", "PRLead004", "PRLead005"]
    LeadStatus: string[] = ["Active1", "Inactive2", "Active3", "Active4", "Inactive5"]

    public leadcreationloop(accountID: number[], LeadName: string[], LeadStatus: string[]): string[]{

        const leadrecord: string[] = []

        LeadName.forEach ((name, index) => {
            const createleadrecord = ( accountID[index] + "LeadName:" + LeadName[index] + LeadStatus[index] )
            leadrecord.push(createleadrecord)
    })
        return leadrecord
    }
}


const lead = new leadtocash()
const newlead: string[] = lead.leadcreationloop(accountID, lead.LeadName, lead.LeadStatus)
console.log(newlead)

*/
