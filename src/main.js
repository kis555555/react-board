import './App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Main = ({history}) => {
  const [userID, setUserID] = useState("")
  const [userPwd, setUserPwd] = useState("")

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      if(response.data.LoggedIn === true)
      {
        setLoginStatus(response.data.user_id);
        history.push('/board_main');
      }
      //console.log(setLoginStatus);
    });
  }, []);


  const submitlogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/",{
            SenduserID: userID,
            SenduserPwd: userPwd, 
        })
        .then((response) =>{
          if(response.data.message){
            setLoginStatus(response.data.message);
          }else{
            setLoginStatus(response.data[0].user_id);
            alert('로그인 성공');
            history.push('/board_main');
          }
        });
    };


        return(
            <header>
                <Form style={{ display: "inline-block", width: "50%", padding : "12%"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login ID</Form.Label>
            <Form.Control type="email" placeholder="Enter your ID" name = "userID" 
            onChange={(e)=>{
                setUserID(e.target.value);
            }}/>
            <Form.Text className="text-muted">
              We'll never share your id with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" name = "userPwd"
            onChange={(e) => {
                setUserPwd(e.target.value);
            }} />
          </Form.Group>
          <Button onClick = {submitlogin} variant="primary" type="submit" style = {{ margin:"10px"}}>
            Login
          </Button>
          <Button onClick = { ()=> {history.push("/signup") }}variant="primary" type="submit">
            Sign Up
          </Button>
       </Form>
       <h1>{loginStatus}</h1>
            </header>
        );
        
}

export default Main;