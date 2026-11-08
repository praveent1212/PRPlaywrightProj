// Tuple - fixed-size collection each element can have different type
// Properties : defined with specific number of elements :  Type - safe - each position as fixed type
// When to use : When you want to group related but different type of data together
// method only in Tuple - Join()
// method to practice - reduce()


class TupleDemo{
    public tescoTuple(){
        const account3 : [ number, string, boolean ] = [ 1011, "TescoBristol", true ]
        const contact2: [ number, string ] = [ 22202, "Andrew" ]

        console.log("========Tuple 3 Account values===========")
        console.log(account3)
        
        console.log("========Tuple 2 Contact values===========")
        console.log(contact2)

    }

}

const tescostores = new TupleDemo
tescostores.tescoTuple()