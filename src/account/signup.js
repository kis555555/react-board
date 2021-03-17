import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Axios from "axios";


const Signup = ({history}) =>{
    const [userID, setUserID] = useState("")
    const [userPwd, setUserPwd] = useState("")

    
    
    const submitSignup = (e) => {
      e.preventDefault();
        Axios.post("http://localhost:3001/signup",{
            SenduserID: userID,
            SenduserPwd: userPwd, 
        }).then(()=>{
          alert("회원가입 성공");
        });
    };
    
    return(
        
        <div>


         <Form style={{ display: "inline-block", width: "50%", padding : "12%"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login ID</Form.Label>
            <Form.Control type="email" placeholder="Enter new ID" name = "userID" 
            onChange={(e)=>{
                setUserID(e.target.value);
            }}/>
            <Form.Text className="text-muted">
              We'll never share your id with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new Password" name = "userPwd" 
            onChange={(e) => {
                setUserPwd(e.target.value);
            }}/>
          </Form.Group>
          <Button onClick = {()=>{history.push('/')}}variant="primary" type="submit" style = {{ margin:"10px"}}>
            Back
          </Button>
          <Button onClick = {submitSignup} variant="primary" type="submit">
            Sign Up
          </Button>
       </Form>
        </div>
    );
}
export default Signup;