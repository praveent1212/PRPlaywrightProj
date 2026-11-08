function greet(){
    console.log("Hello world")
}

greet()

// anonomus funciton : function with our a function name
// function , fat arrow, body of the funciton

()=>{

    console.log("Hello world")
}

//=============================
// assign ananomus funciton to a variable
// greetfunction is a vaiable

const greetfunction = ()=>{

    console.log("Hello world")
}


greet()
greetfunction()

///====function with parameter

function add(a:number, b:number){
    return a+b
}

console.log(add(100,200))

//=================ananomus function with parameter

const addArrow = (a:number b:number) =>
{
    return a+b
}

console.log(addArrow(100,300))

==
const result = addArrow(100,300))
console.log(result)

=======

ananomus function can be passed as a paramenter in other function

====