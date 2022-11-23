 /* --1. Part--
 User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
 */

/*const a = +prompt ('Please enter value of A');
const b = +prompt ('Please enter value of B');
console.log(a);
console.log(b);
let result= a/b
let remainder = a%b
console.log (result);
console.log (remainder);
*/


/*
2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable
 B must be assigned to variable A, and vice versa).*/


/*const A = +prompt ('Please enter value of A');
const B = +prompt ('Please enter value of B');
console.log(A);
console.log(B);
let tempt = A+B;
A=tempt-B;
console.log(B);
*/



/*  --3. Part--
The user enters 3 non-zero numbers (A, B and C).
Print to the console the solution (the value of X) of the standard linear equation, 
where A*X+B=C.
*/

/* const A = +prompt ('Please enter value of A');
 const B = +prompt ('Please enter value of B');
 const C = +prompt ('Please enter value of C');
console.log(A);
console.log(B);
console.log(C);
let X= (C-B)/A;
console.log (X)
*/

/*4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B,
 if A=B then the result of A*B, if A<B then A-B.*/
 /*const a = +prompt ('Please enter value of A');
 const b = +prompt ('Please enter value of B');
 console.log(a);
 console.log(b);
 if (a>b) {
    var result = a+b;
 } else if ( a<b ){
    var result = a-b;
 } else {
    var result = a*b;
 }
 console.log(result);
 */


 /*5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of
 quadratic equation ax^2+bx+c=0. */

 /*const a = +prompt ('Please enter value of A');
 const b = +prompt ('Please enter value of B');
 const c = +prompt ('Please enter value of C');
 console.log(a);
 console.log(b);
 console.log(c);

 //ax**2+bx+c=0

  var d = b**2-4*(a*c);
 if (d<0){
   console.log("This problem has not real roots.");
 } else if (d>0) {
 var k = Math.sqrt(d);
 var x1 = (-1*b+k)/2*a;
 var x2 = (-1*b-k)/2*a;
 console.log(x1, x2);
 }else{
   var x = (-1*b)/2*a;
   console.log(x);
 }
 */
 

 /*6. The user enters a two-digit number. Print the literal representation of
  this number to the console. For example, typing "25" will display "twenty five"
   in the console, and "13" will display "thirteen".*/
 let A = prompt("Please enter the number:");
 let decimals;
 let singularities;
 if (A.length !== 2) {
   alert("You should enter only two-digit number!");
 } else if (A.length == 2){
   if (A.startsWith("2")) {
     decimals  = "twenty";
   }
   if (A.startsWith("3")) {
    decimals = "thirty";
   }
   if (A.startsWith("4")) {
     decimals = "fourty";
   }
   if (A.startsWith("5")) {
     decimals = "fifty";
   }
   if (A.startsWith("6")) {
     decimals = "sixty";
   }
   if (A.startsWith("7")) {
     decimals = "seventy";
   }
   if (A.startsWith("8")) {
     decimals = "eighty";
   }
   if (A.startsWith("9")) {
     decimals = "ninety";
   }
   if (A.endsWith("1", 2) == true && !A.startsWith("1")) {
    singularities = "one";
   }
   if (A.endsWith("2", 2) == true && !A.startsWith("1")) {
    singularities = "two";
   }
   if (A.endsWith("3", 2) == true && !A.startsWith("1")) {
    singularities = "three";
   }
   if (A.endsWith("4", 2) == true && !A.startsWith("1")) {
    singularities = "four";
   }
   if (A.endsWith("5", 2) == true && !A.startsWith("1")) {
    singularities = "five";
   }
  if (A.endsWith("6", 2) == true && !A.startsWith("1")) {
    singularities = "six";
  }
   if (A.endsWith("7", 2) == true && !A.startsWith("1")) {
    singularities = "seven";
   }
   if (A.endsWith("8", 2) == true && !A.startsWith("1")) {
    singularities = "eight";
  }
   if (A.endsWith("9", 2) == true && !A.startsWith("1")) {
    singularities = "nine";
   }
 console.log(` ${decimals} ${singularities}`);
}
  else {
    if (A == 10) {
      console.log("ten");
    }
    if (A == 11) {
      console.log("eleven");
    }
    if (A == 12) {
      console.log("twelve");
    }
    if (A == 13) {
      console.log("thirteen");
    }
    if (A == 14) {
      console.log("fourteen");
    }
    if (A == 15) {
      console.log("fifteen");
    }
    if (A == 16) {
      console.log("sixteen");
    }
    if (A == 17) {
      console.log("seventeen");
    }
    if (A == 18) {
      console.log("eighteen");
    }
    if (A == 19) {
      console.log("nineteen");
  }
}

/*
7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside
   a circle with radius r? (the center of the circle is at the origin)
*/

/* const x = +prompt ('Please enter value of X');
 const y = +prompt ('Please enter value of Y');
 const r = +prompt ('Please enter value of R');

 var R = Math.sqrt(x**2+y**2);

 if (r<R) {
console.log ("Point with location (x;y) is inside a circle with radius r.");   
} else if (r>R) {
   console.log ("Point with location (x;y) is  outside a circle with radius r.")
} else {
   console.log("Point with location (x;y) is on a circle with radius r.")
}

*/


