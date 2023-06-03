const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'sdasbdabkbd akdkabsdbashkvdjavsjdv',
    resave: false,
    saveUninitialized: true
}))


app.get('/', (req, res) => {
    if(req.session.loggedIn){
        res.sendFile(path.join(__dirname,'..','loggedIn.html'));
    }
    else{
        req.session.loggedIn = true;
        res.sendFile(path.join(__dirname,'..','notloggedIn.html'));
    }
})

app.get('/check', (req, res) => {
    if (req.session.loggedIn) {
        return res.sendFile(path.join(__dirname,'..','loggedIn.html'));
    }
    res.sendFile(path.join(__dirname,'..','notloggedIn.html'));
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});