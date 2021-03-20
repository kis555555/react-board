import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Button, Jumbotron, Form, Row, Col } from 'react-bootstrap';


const Board_create = ({history}) => {

    const [loginStatus, setLoginStatus] = useState("");
    const [userID, setUserID] = useState("")
    
    const [title, setTitle] = useState("")
    const [board, setBoard] = useState("")

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/board_create").then((response) => {
          if(response.data.LoggedIn === true)
          {
            setLoginStatus(response.data.user_id);
          }
          else
          {
              alert("로그인을 해주세요");
              history.push('/');
          }
          console.log(response.data.user[0].user_id);
          setUserID(response.data.user[0].user_id);
          console.log(userID);
        });
      }, []);

      const Write_process = (e) => {
        e.preventDefault();
          Axios.post("http://localhost:3001/board_create",{
              Sendtitle: title,
              Sendboard: board
            }).then(()=>{
                alert("글 작성 완료");
                history.push('/board_main')
              });
      };


    return(
        <header style={{ margin:"auto", width: "75%"}}>
            <Jumbotron>
            <h1>Hello, DDangNon's react board!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary" >Learn more</Button>
            </p>
            </Jumbotron>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Board Title</Form.Label>
                <Form.Control type="text" placeholder="enter text" onChange={(e)=>{
                setTitle(e.target.value);
                }} name = 'title' />
                <Form.Label></Form.Label>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Author
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={userID} name = "userID"/>
                </Col>
            </Form.Group>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Board Textarea</Form.Label>
                <Form.Control as="textarea" rows={8} onChange={(e)=>{
                setBoard(e.target.value);
                }} name = 'board'/>
            </Form.Group>
            </Form>
            
            <Button variant="success" onClick={Write_process}style = {{ margin:"10px"}}>Wirte</Button>
            <Button onClick = {()=>{history.push('/board_main')}} variant="primary">Back</Button>
        </header>
    );
}

export default Board_create;