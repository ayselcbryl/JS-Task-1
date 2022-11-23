const a = +prompt ('Please enter value of A');
const b = +prompt ('Please enter value of B');
const c = +prompt ('Please enter value of C');
 if (a>b){
    if (b>c){
        console.log(b);
    } else {
        console.log(c);
    }
} else {
    if (a>c){
        console.log(a);
    } else {
        console.log(b);
    }
}
