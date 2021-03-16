import './App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Main = ({history}) => {
        return(
            <header>
                <Form style={{ display: "inline-block", width: "50%", padding : "12%"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login ID</Form.Label>
            <Form.Control type="email" placeholder="Enter your ID" />
            <Form.Text className="text-muted">
              We'll never share your id with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" />
          </Form.Group>
          <Button variant="primary" type="submit" style = {{ margin:"10px"}}>
            Login
          </Button>
          <Button onClick = { ()=> {history.push("/signup")}}variant="primary" type="submit">
            Sign Up
          </Button>
       </Form>
            </header>
        );
}

export default Main;