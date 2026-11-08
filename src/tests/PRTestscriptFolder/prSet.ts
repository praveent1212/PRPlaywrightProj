// set - A collection of unique values
// though we added DUPLICATE values in initiation, no duplicate elements allowed when we see the otput.
// Order is insertion based not accessable via numeric index, 
// methods like add(), edit(), delete()
// when to use: when you need unique values and don't need unique positions
// example: poscodes, roll number, order ID's
// exercise: in the web table want to know the names of doctors though the hae repeated
// exercise: in web table 10 records, find the duplicate number of records. : array.length-set.length

/*
class Company{
    public techCompany(){
        const companyname = ["Insulet", "TR", "Deloitte", "Darktrace", "TR", "Darktrace"] 
        const companyLocation : string[] = [ "London", "NewYork", "Hyderabad" ]
        const companyContact = new Set([999, 888, 777, 666, 888, 777])   // Set

        
        const companyPostCode = new Set<number>
        companyPostCode.add(5555) 
        companyPostCode.add(6666) 
        companyPostCode.add(7777) 
        companyPostCode.add(5555) 
        companyPostCode.add(6666)
        
        const account3 = [2, 3, 4, 5, 6, 2, 3, 8]  // 8 - 6 = 2

        console.log (account3.length)

      //  console.log("=======set===============")    
        //console.log(companyLocation.at(2))  //  Hyderabad

       // console.log("=======set===============")    
       // console.log(companyContact)  //  Hyderabad

        //console.log("=======set===============")    
       // console.log(companyPostCode)  //  Hyderabad
        
    }

}

const setDemo = new Company
setDemo.techCompany()

*/



class Company{
    public techCompany(){
        const total : number [] | string [] = [2, 3, 4, 5, 6, 2, 3, 8, "david" ] // 8 - 6 = 2

        const unique = new Set(total).size
        const duplicate = (total.length - unique)

        console.log (total.length, "-", unique, "=", duplicate )
    }

}

const setDemo = new Company
setDemo.techCompany()



 