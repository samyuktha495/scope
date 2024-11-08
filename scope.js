// examples for block scope
if (true){
    let message="hello"
    console.log(message)
}



if (true){
   let a="blockscoped";
   console.log(a);

}

//function scope examples
function greet(){
   var message="hello from block scope"
   console.log(message);
}
greet();


function test(){
   var number=23;
   console.log(number);
}
test()


//global scope examples
var s ="global scope";
console.log(s)
var name="akhila"
console.log(name) 
var b=5
var c=6
console.log(b+c);






