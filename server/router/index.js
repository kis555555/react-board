const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const { Redirect } = require('react-router');



var connection = mysql.createConnection({
    host : "",
    user : "",
    password : "",
    database : "",
});

router.get('/',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
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

router.get('/signup',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
    }else{
        res.send({LoggedIn: false})
    }
});

router.post('/signup', (req, res) => {
    const user_id = req.body.SenduserID;
    const user_pw = req.body.SenduserPwd;
    connection.query("INSERT INTO users(user_id,user_pw)values(?,?)",[user_id,user_pw],
    function(err, rows, fields){
        if(err){
            res.send("실패");
        }
        else{
            res.send("성공");
        }
    });
})

router.get('/board_main',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
    }else{
        res.send({LoggedIn: false})
    }
});

router.post('/board_main',(req,res) => {
    connection.query("SELECT * FROM boards",
    function(err,rows,fields){
        if(err){
            console.log("실패");
        }else{
            console.log("성공");
            res.send(rows);
        }
    })
});


router.get('/board_create',(req,res)=>{
    if(req.session.user){
        res.send({LoggedIn: true, user: req.session.user})
    }else{
        res.send({LoggedIn: false})
    }
});

router.post('/board_create', (req, res) => {
    const title = req.body.Sendtitle;
    const board = req.body.Sendboard;

    const showdate= new Date();
    const displaytodaysDate=showdate.getFullYear()+'/'+showdate.getMonth()+'/'+showdate.getDate();
    //console.log(title,board,req.session.user[0].user_id);
    //console.log(displaytodaysDate);
    connection.query("INSERT INTO boards(title,board,author,board_date)values(?,?,?,?)",[title,board,req.session.user[0].user_id,displaytodaysDate],
    function(err, rows, fields){
        if(err){
            res.send("실패");
        }
        else{
            res.send("성공");
        }
    });
})

module.exports = router;