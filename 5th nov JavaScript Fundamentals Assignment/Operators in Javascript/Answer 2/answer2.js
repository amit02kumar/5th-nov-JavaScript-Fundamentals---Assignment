/*
comma operator:- 
Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. A comma operator is used as a separator for multiple expressions at a place that requires a single expression
*/

// syntax:-
// Expression1, Expression2, Expression3,.....

for (let a = 0, b =5; a <= 5; a++, b--) { 
    console.log(a, b); 
}