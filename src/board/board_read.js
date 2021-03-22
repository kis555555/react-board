import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Button, Jumbotron, Form, Row, Col } from 'react-bootstrap';


const Board_read = ({history, match, location}) => {

    const [loginStatus, setLoginStatus] = useState("");

    const [boardTitle, setBoardTitle] = useState("")
    const [boardContext, setBoardContext] = useState("")
    const [boardAuthor, setBoardAuthor] = useState("")
    const [boardDate, setBoardDate] = useState("")


    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/board_read").then((response) => {
          if(response.data.LoggedIn === true)
          {
            setLoginStatus(response.data.user_id);
          }
          else
          {
              alert("로그인을 해주세요");
              history.push('/');
          }
          //console.log(response.data.user[0].user_id);
          //setUserID(response.data.user[0].user_id);
          //console.log(userID);
        });
      }, []);

      useEffect(() => {
        Axios.post("http://localhost:3001/board_read",{
              Sendtitle: match.params.name
            }).then((response)=>{
                console.log(response.data);
                setBoardTitle(response.data.title);
                setBoardContext(response.data.board);
                setBoardAuthor(response.data.author);
                setBoardDate(response.data.board_date);
              });
      },[])

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
            <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label>Board Title</Form.Label>
                <Form.Control type="text" style ={{ background:"#FFFFFF"}} placeholder="enter text" value = {boardTitle} name = 'title' readOnly/>
                <Form.Label></Form.Label>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Author
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly style={{border:"1px solid gray"}} defaultValue={boardAuthor} name = "userID"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Date
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly style={{border:"1px solid gray"}} defaultValue={boardDate} name = "Date"/>
                </Col>
            </Form.Group>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Board Textarea</Form.Label>
                <Form.Control as="textarea" style ={{ background:"#FFFFFF"}} rows={8} name = 'board' value = {boardContext} readOnly/>
            </Form.Group>
            </Form>
            
            <Button variant="success" style = {{ margin:"10px"}}>Update</Button>
            <Button onClick = {()=>{history.push('/board_main')}} variant="primary">Back</Button>
        </header>
    );
}

export default Board_read;