// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// 
const fs = require("fs");
fs.readFile("tut65_dele.txt", "utf-8", (err, data)=>{
    // this below will execute when the dele.txt file will be read. this is a non blocking code(callback fun)
    console.log(data);
});
// this will execute first since in above we have used the call back. there fore the above code will be thrown in the background to work. 
console.log("This is a message");
