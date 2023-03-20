const express1=require('express');
const app=express1();
const port=80
const path=require('path');

//EXPRESS specific stuff

app.use('/static', express1.static('static'))   // this is for serving the static files.here  '/static' is url and  'static' is folder


//PUG specific stuff


app.set('view engine', 'pug')   // Set the template engine as pug

app.set('views',path.join(__dirname,'views1'))  // set the veiws directory here views1 is a folder name, some people name the folder as template, the people who are coming from python backgroud from leaning django framework, they generally give the folder as template





// //  our demo.pug endpoint
// app.get('/demo',(req,res)=>{
//     res.status  (200).render('demo',{title: 'hey hardik',message:'hello there! and thanks for telling me how to use pug'});
// })
// ;


// app.get('/',(req,res)=>{
//     res.status(200).send('this is homepage of my first express app with harry');
// })
// ;

// // this is for get request
// app.get('/about',(req,res)=>{
//     res.send('this is about page of my first express app with harry');
// })
// ;
// // this is for post request 
// app.post('/about',(req,res)=>{
//     res.send('this is post request about page of my first express app with harry');
// });

// app.get('/this',(req,res)=>{
//     res.status(404).send('this page is not found on my website ');
// });



//ENDPoints
app.get('/',(req,res)=>{
    const con='this is the best content on the internet so far'
    const params={'title':'Pubg is the best game','content':con}
    res.status(200).render('index.pug',params)    //use render instead for send because here we are using the templates(veiws i created). here i will be rendering the veiws1

})

//start the server
app.listen(port ,()=>{
    console.log(`the application started successfully on port ${port}`);
})
;

