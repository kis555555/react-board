import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Table, Button, Jumbotron } from 'react-bootstrap';

const Board_main = ({history}) => {

    const [loginStatus, setLoginStatus] = useState("");
    const [userID, setUserID] = useState("");
    const [boardContent, setBoardContent] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/board_main").then((response) => {
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
        Axios.post("http://localhost:3001/board_main").then((response) => {
            console.log(response.data);
            setBoardContent(response.data);
          //console.log(response.data.user[0].user_id);
          //setUserID(response.data.user[0].user_id);
          //console.log(userID);
        });
      }, []);


    return(
        <header style={{ margin:"auto", width: "75%"}}>
            <Jumbotron>
            <h1>Hello, DDangNon's react board!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>No</th>
                <th style={{ width: "70%"}}>Title</th>
                <th>Author</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {boardContent.map(element =>
                <tr key={element.board_no}>
                <td>{element.board_no}</td>
                <td><a href = "">{element.board}</a></td>
                <td>{element.author}</td>
                <td>{element.board_date}</td>
                </tr>
                ).reverse()}
            </tbody>
            </Table>

           

            <Button variant="primary" onClick = {()=>{history.push('/board_create')}}>Wirte</Button>
        </header>
    );
}

export default Board_main;