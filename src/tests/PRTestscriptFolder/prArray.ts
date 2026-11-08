// ==Array Methods: 

class ArrayDemo {
    public ArrayMethod() {
        const leadName: string[] = ["name1", "name2", "name3","name4","name5"] 
        const leadNum: number[] = [10, 20, 30, 40, 50];
    
        const leadAmount: (number | number[])[]= [100, 200, [250, 250], 400, 500] // nested array - number arry[] and array of numbers[]
        
        console.log(leadName)
        //console.log(leadName.at(3))  // index 3
        //console.log(leadName.concat(leadAmount.flat()))  //to combine two arrays
        //console.log([...leadName,...leadAmount.flat()])  //to combine two arrays best way
        console.log(leadNum.every((value)=>value>0)) // first value is parameter of the arrow fucntion, second value is actual value
        console.log(leadAmount.flat().every((value)=>value>50))
        
    }
}

const objArray = new ArrayDemo()
objArray.ArrayMethod()




/*
class ArrayDemo {
    public printArray() {
        let arr: number[] = [1, 2, 3, 4, 5];
        for (let i: number = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

const objArray = new ArrayDemo()
objArray.printArray()

*/



