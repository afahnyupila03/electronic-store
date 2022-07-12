import { Button, Card, Container, Form } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import { Link } from 'react-router-dom';
import { useRef } from "react";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <Wrapper>
            <Container>
                <Link className='navbar-brand' style={{textAlign: 'center'}} to='/'>
                    Electro.
                </Link>
                    <Card className='p-5 m-5'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text'placeholder='Enter username' ref={usernameRef} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className='mb-4'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" autoComplete="true" ref={emailRef} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className='mb-4'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" autoComplete="false" ref={passwordRef} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" className='mb-4'>
                                <Form.Check type="checkbox" label="Remember next time!!" />
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Link to='/#' style={{ textDecoration: 'none' }}>
                                    Forgot Password?
                                </Link>
                            </Form.Group>
                                <Button variant="primary" type="submit" className='mb-3'>
                                    Login
                                </Button>

                                <p>
                                    Don't have an account?
                                    <Link to='/register' style={{ textDecoration: 'none' }}> Create Account</Link>
                                </p>
                        </Form>
                    </Card>
            </Container>
        </Wrapper>
    );
};

export default Login;