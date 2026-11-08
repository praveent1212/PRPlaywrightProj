//Interface: when you call the Key, vaue part will be the output ==============xx
// Define: interface or Type, usage: to handle test data (structured data)
// Structure : Key-value pairs,  Access: obj.key  or obj["key"]
// Interface - properties - object - Type, Pick, Omit, Partial

class InterfaceDemo{
    public accountMethod(){
            interface accountInfo{    //Declare an Interface
                    accID: number,
                    accName: string,
                    accDOB?: string,  //Optional field
                    accEmail?: string,  //Optional field
                    accAddress?: string,  //Optional field
                    accSalary?: number   //Optional field
            }

            const accountRecordOne : accountInfo = {  // store the data into interface
                    accID: 1011,
                    accName: "Andrew",
                    accDOB: "01-01-1980",
                    accEmail: "andrew001@gmail.com",
                    accAddress: "12 Paradise Road, NewCity, UK",
                    accSalary: 3000
            }
            console.log("=========ObjReturnTYpe========================")
            console.log("ObjReturnTYpe:", typeof( accountRecordOne))

        type accountRecordPick = Pick<accountInfo, "accID" | "accName">
            const accPick : accountRecordPick = {  // store the data into interface
                    accID: 2022,
                    accName: "Bobby"
                    //accDOB: "20-11-12000",
                    //accEmail: "bobby002@gmail.com",
                    //accAddress: "22 eastern Road, OldCity, UK",
                   // accSalary: 5000
                }
            console.log("=========Pick========================")
            console.log("Pick:", accPick)

            
        type accountRecordOmit = Omit<accountInfo, "accEmail" | "AccAddress">
           const accOmit : accountRecordOmit = {  // store the data into interface
                    accID: 1011,
                    accName: "Andrew",
                    accDOB: "01-01-1980",
                   // accEmail: "andrew001@gmail.com",
                   // accAddress: "12 Paradise Road, NewCity, UK",
                    accSalary: 3000
            }
            console.log("=========Omit========================")
            console.log("Omit:", accOmit)

            const accPartial : Partial<accountInfo> = {  // store the data into interface
                  //accID: 1011,
                  //accName: "Andrew",
                  //accDOB: "01-01-1980",
                    accEmail: "andrew001@gmail.com",
                    accAddress: "12 Paradise Road, NewCity, UK",
                    accSalary: 3000
            }
            console.log("=========Partial========================")
            console.log("Partial:", accPartial)
    }
}

const Obj = new InterfaceDemo
Obj.accountMethod()


/*

class ClassName{
    public methodNameOne(){
        interface interfaceName{
            propOne : number,
            propTwo : string,
            propOptional? : number,
            propThree : string
        }
            const objToCallInterface : interfaceName = {
                propOne : 1011,
                propTwo : "Andrew"
            }
            //console.log(typeof(varToCallInterface))
           // console.log(varToCallInterface)
          // console.log('${varToCallInterface}')

          type varOne = Pick<interfaceName, "propOne" | "propTwo">;
         // type varOne = Partial<Pick<interfaceName, "propOne" | "propTwo">>;
           const objTwo : varOne = {
            propOne : 22222,
            propTwo :  "Bobby",
           }
           console.log(objTwo)
    }

}

const obj = new ClassName
obj.methodNameOne()

*/


