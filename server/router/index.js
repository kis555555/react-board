const express = require('express');
const router = express.Router();
const mysql = require("mysql");

var connection = mysql.createConnection({
    host : "database-1.cwhjrrb5xjq6.ap-northeast-2.rds.amazonaws.com",
    user : "root",
    password : "wlstka123",
    database : "example",
});

router.get('/', (req,res) => {
    res.send('hello world');
})

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