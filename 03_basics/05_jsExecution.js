// JavaScript Execution Context - Most IMPORTANT for interview

/* 
    The working of the JavaScript works on 3 phases:
    1. Global Execution Context
        The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment & window object in browser environment)
    2. Memory/Creation Phase
        During this phase, JS engine scans the code and allocates memory and assigns the intial values for the variables, functions, etc. For variables, they are 'undefined' and for functions they are set to their function definition
    3. Execution Phase
        After the memory phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called, it creates a new "Function Execution" context which consits of two phase (they work same as explained above but only for the particular function scope):
            i. Memory Phase
            ii. Execution Phase
            The return value of the 'Function Execution' context is passed to the Global Execution Context

*/

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/* 
    How above code excutes in javascript?

    1. Global Execution (Global Envirnoment)
        - set Global Execution Context

    2. Memory Creation Phase (Creation Phase)
        - collects all variables and allocates memory for each variable

        - val1 = undefined
        - val2 = undefined
        - addNum = defination
        - result1 = undefined
        - result2 = undefined

    3. Execution Phase

        - val1 = 10
        - val2 = 5
        - addNum = sepreate Execution Context [new variable environment + execution thread]
            i. Memory Phase
                * val1 = undefined
                * val2 = undefined
                * total = undefined
            
            ii. Execution Phase
                * num1 = 10
                * num2 = 5
                * total = 15 // returns total to Global execution
                
            After its completion, the context will be deleted
        - result1 = 15
        - addNum = sepreate Execution Context [new variable environment + execution thread]
            i. Memory Phase
                * val1 = undefined
                * val2 = undefined
                * total = undefined
            
            ii. Execution Phase
                * num1 = 10
                * num2 = 2
                * total = 12 // returns total to Global execution
            After its completion, the context will be deleted
        - result2 = 12

*/


// Callstack

function func1() {
    console.log("I am first function"); 
    func2()
}
function func2() {
    console.log("I am second function");
    func3()
}
function func3() {
    console.log("I am third function");
}

func1()
func2()
func3()

/* Call stack workflow of above code
            Global Execution
        In                  Out
    1. funcOne()        funcThree()
    2. funcTwo()        funcTwo()
    3. funcThree()      funcOne()

*/