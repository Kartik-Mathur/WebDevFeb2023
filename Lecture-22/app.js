const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const bodyParser = require('body-parser');

hbs.registerPartials(__dirname + '/views/partials');

app.use('/',express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/index',(req,res)=>{
    res.render('index',{
        title:"Facebook"
    })
})

app.use('/posts',require('./routes/posts/posts'));

app.use((req,res)=>{
    res.render('error');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});