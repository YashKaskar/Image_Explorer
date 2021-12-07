const express = require('express');
const app =express();
const path = require('path');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res) => {
    res.send('Home')
})

app.get('/admin',(req,res) => {
    res.render('data/admin')
})

app.get('/user',(req,res) => {
    res.render('data/user')
})

app.get('/new',(req,res) => { 
res.render('data/new')
})


app.listen(3000, () => {
    console.log("Serving on port 3000")
});