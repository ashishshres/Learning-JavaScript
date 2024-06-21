// Execution Context
// It means how JavaScript runs or executes the file

/*
    [code file]
    1. Global EC 
        -> refers to this variable
        -> this [window object in browser], this [empty object in node env]
    
    2. Function EC

    3. Eval EC
*/

/*
    [code file]
    1. Memory Creation Phase [Memory allocation]
    2. Execution Phase
*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*
[First Cycle]
    1. Global Execution
    -> this
    
    2. Memory Phase
    -> val1 = undefined
    -> val2 = undefined
    -> addNum = function definition
    -> result1 = undefined
    -> result2 = undefined

[Second Cycle]
    1. Execution Phase
    -> val1 = 10
    -> val2 = 5
    -> addNum
        -> [new variable environment + execution thread] -> delete once completed
            1. Memory Phase
            -> val1 = undefined
            -> val2 = undefined
            -> total = undefined

            2. Execution Context
            -> num1 = 10
            -> num2 = 5
            -> total = 15 
            -> return total to Global EC
    -> result1 = 15
    -> addNum
        -> [new variable environment + execution thread] -> delete once completed
            1. Memory Phase
            . . .
            . . .
            2. Execution Context
            . . .
            . . .
    -> result2 = 12
*/

// Call Stack -> Last In First Out

/*
    {
        one();
        two();
        three();
    }

    [Call Stack]

    3   three()
    2   two()
    1   one()
    0   Global EC
*/

/*
    {
        one();
        two(){
            three();
        }
    }

    [Call Stack]

    3   three()
    2   two()
    1   one()
    0   Global EC
*/
