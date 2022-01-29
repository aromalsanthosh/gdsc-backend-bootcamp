const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('Home');
});

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})


router.get('*',(req,res)=>{
    res.send("Error page")
})

module.exports=router;