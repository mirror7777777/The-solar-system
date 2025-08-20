const express = require('express')
const path = require ('path')
const app = express();
const Port = 8090;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(Port , ()=>{
    console.log(`Port is open at: http://localhost:${Port}`)
})
app.use(express.static('public'))

app.get('/landing', (req , res)=>{
    res.sendFile(path.join(__dirname, 'html/landing.html'))

});
app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname, 'html/About.html'))
})
app.get('/Facts', (req,res)=>{
    res.sendFile(path.join(__dirname, 'html/facts.html'))
})