console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}


// here it will show the error...cause we dont have to write "mod." , and just average. Because when i export the average function in the mod.js like this "module.exports=average;", in here module.exports becomes the average function. an when we import the funtion in the index.js with the help of require('./mod') in "const avgfun =require('./mod')" whatever is imported goes inside the avgfun variable. and we can directly call the average funtion with avgfun(),by passing particular parameters: code is written below and in mod.js

// module.exports=average;

// now if i want to export multiple things from mod.js to index.js, then we will create and treat 'module.export' as an object and which will have key and field inside it.like see below:

// module.exports = {
//         avg: average,
//         name: "Harry",
//         repo: "GitHub"
//     }


// also module.export is object in itself so i can write like this below    
// this below means, like since module.exports is an object in itself so i have given key as name and consider its value as harry

module.exports.names = "Harry";

