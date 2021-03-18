import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Table, Button, Jumbotron } from 'react-bootstrap';

const Board_main = ({history}) => {

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/").then((response) => {
          if(response.data.LoggedIn === true)
          {
            setLoginStatus(response.data.user_id);
          }
          else
          {
              alert("로그인을 해주세요");
              history.push('/');
          }
          console.log(response);
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
                <tr>
                <td>1</td>
                <td>What is Lorem Ipsum?</td>
                <td>Otto</td>
                <td>2021-03-18</td>
                </tr>
                <tr>
                <td>2</td>
                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking</td>
                <td>Thornton</td>
                <td>2021-03-18</td>
                </tr>
            </tbody>
            </Table>
        </header>
    );
}

export default Board_main;