const express = require('express')
const path = require('path')

const app = express()

const ejs = require('ejs')
app.set('view engine','ejs')

const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost.js')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true,useUnifiedTopology:true})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/post/new',(req,res)=>{
    res.render('create')
})

app.post('/posts/store',async(req,res)=>{
    // model creates a new doc with browser data
    await BlogPost.create(req.body,(error,blogpost)=>{res.redirect('/')
    })
})