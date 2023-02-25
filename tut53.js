console.log("this is tut 53");

//here name is parameter. and huheuheu is a default parameter. if no value is passed then default parameter will get used

// here the below funtion deosnt retur anything
function greet(name, greettext = "hueueeuhe") {
  // here name1 is a local variable
  let name1 = "hardik is genius";
  console.log(greettext + " " + name);
  console.log(name + " is a good boy");
  console.log(name1);
  console.log(" ");
}

//dont use a varaible same as the argumetn given in funtion in js. it gives warning. so instead of using name variable for adi. i used name1

// these are all the global varaible
let name1 = "adi";
let name2 = "avishkar";
let name3 = "tushar";
let name4 = "shrav";
let name5 = "hardik";

let greettext = "good morning";

// this is how we call the funtion
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);
greet(name4, greettext);
greet(name5, greettext);
greet(name5);

// console.log(name1 +' is a good boy')
// console.log(name2 +' is a good boy')
// console.log(name3 +' is a good boy')
// console.log(name4 +' is a good boy')
// console.log(name5 +' is a good boy')

// since the funtions doesnt reutrn anything it will give output as undefiined
let returnval = greet(name1, greettext);
console.log(returnval); // this will give result as an undefiend

function sum(a, b, c) {
  let d = a + b + c;
  return d;
  // whatever is written after the return will not get executed. it is called as unreachable code
  console.log("function is returned  ");
}

let returnval2 = sum(1, 2, 3);
console.log(returnval2); // this will give result. whatever the funtion is returing
