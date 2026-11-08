// difference between Maps and Interace
// const map1 = new Map(), 
// map1.set(10)
//differentiate the results -  Interface  :      Maps =>
// getter methods map1.size,

//class A - obect, class B - object. in class C method with parameter calling object A, -
// correct, if we call object c willl get reference error

class ClassA{
    public methodA(){
    }
}
const objA = new ClassA()
objA.methodA()


class ClassC{
    public methodC(){
    }
}
const objC = new ClassC()
objC.methodC() 


class ClassB{
    public methodB(){
    }
}
const objB = new ClassB()
objB.methodB()
objA.methodA()
objC.methodC()

