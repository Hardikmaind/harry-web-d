
// here it will show the error...cause we dont have to write "mod." , and just average. Because when i export the average function in the mod.js like this "module.exports=average;", in here module.exports becomes the average function. an when we import the funtion in the index.js with the help of require('./mod') in "const avgfun =require('./mod')" whatever is imported goes inside the avefun variable. and we can directly call the average funtion with avgfun(),by passing particular parameters


// const avgfun =require('./mod')
// console.log(avgfun([3,4]))
// console.log('this is index.js')


// now if i want to export multiple things from mod.js to index.js, then in mod.js we will create and  assign that object to module.export which will have key and field inside it.like see below:

// module.exports = {
    //     avg: average,
    //     name: "Harry",
    //     repo: "GitHub"
    // }

// and in this way with the help of require i can impirt the mod.js's exported object which below given:-
// this below given object is given to module.export , this object has no name in mod.js. we can also say here like, obj1 ke andar lelo woh saari cheje joh mod module export karta hain, and mod module is exporting the object. this below thing will happen
// obj1= {
    //     avg: average,
    //     name: "Harry",
    //     repo: "GitHub"
    // }

// const obj1 =require('./mod')
// console.log(obj1.avg([3,4]))
// console.log('this is index.js')


// also module.export is object in itself so i can write like this below    
//  since module.exports is an object in itself so i have given key to object "module.export" as name and consider its value as harry

const obj1 =require('./mod')
console.log(obj1.names)
