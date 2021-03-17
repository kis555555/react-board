const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const { Redirect } = require('react-router');



var connection = mysql.createConnection({
    host : "",
    user : "t",
    password : "",
    database : "",
});

router.get('/',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
        console.log(req.session.user);
    }else{
        res.send({LoggedIn: false})
    }
});

router.get('/signup',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
        console.log(req.session.user);
    }else{
        res.send({LoggedIn: false})
    }
});

router.post('/', (req,res) => {
    const user_id = req.body.SenduserID;
    const user_pw = req.body.SenduserPwd;


    connection.query(
        "SELECT * FROM users WHERE user_id = ? AND user_pw = ?",
        [user_id,user_pw],
    (err, result) => {
        if(err){
            res.send({ err: err});
        }
        if(result.length > 0){
            req.session.user = result;
            res.send(result);
        }else{
            res.send({message: "No user found"});
        }
    }
    );
});

router.post('/signup', (req, res) => {
    const user_id = req.body.SenduserID;
    const user_pw = req.body.SenduserPwd;
    connection.query("INSERT INTO users(user_id,user_pw)values(?,?)",[user_id,user_pw],
    function(err, rows, fields){
        if(err){
            console.log("실패");
        }
        else{
            console.log("성공");
        }
    });

})

module.exports = router;