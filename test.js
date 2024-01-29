const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true,useUnifiedTopology:true})

BlogPost.create({
    title:'Sample Post',
    body:'This is a sample post.'
},(error,blogpost)=>{
    console.log(error,blogpost)
}) 
