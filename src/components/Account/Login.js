import { Button, Col, Card, Container, Form, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import { Link } from 'react-router-dom';
import { useRef } from "react";

const Login = () => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const LoginData = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        console.log(LoginData);

        usernameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        
    }

    return (
        <Wrapper>
            <Container style={{marginTop: '8rem'}}>
                <Row>
                    
                    {/* logo */}
                    <Link to='/' style={{ textDecoration: 'none' }} className='text-center' >
                        <h3 className='text-danger'>
                            <img src='https://www.svgrepo.com/show/68604/bolt.svg' style={{ width: '2.2rem' }} alt='logo' className='logo' /> Electro.
                        </h3>
                    </Link>

                    {/* login Ui */}
                    <Col>
                        <Card className='p-5 m-5'>
                            
                            <Form onSubmit={handleSubmit}>

                                <h2 className='text-center text-danger mb-3'> Login </h2>
                                
                                <Form.Group className='mb-4'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type='text' placeholder='Enter username' ref={usernameRef} />
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
                                    <Form.Check type="checkbox" className='text-danger' label="Remember next time!!" />
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <Link to='/#' className='text-danger' style={{ textDecoration: 'none' }}>
                                        Forgot Password?
                                    </Link>
                                </Form.Group>
                                <Button variant="danger" type="submit" className='mb-3'>
                                    Login
                                </Button>

                                <p>
                                    Don't have an account?
                                    <Link to='/register' className='text-danger' style={{ textDecoration: 'none' }}> Create Account</Link>
                                </p>
                            </Form>
                        </Card>
                    </Col>

                    {/* Quick Tip */}
                    <Col>
                        <Card className='m-5 p-5'>
                            <h4 className='text-center mb-2 text-danger'>HOW TO CHECK YOUR ORDER STATUS?</h4>
                            <p className='text-center'>
                                To quickly get the status of your order 
                                <Link to='#' className='text-danger' style={{textDecoration: 'none'}}> click here </Link>
                                or use the Track My Order 
                                link in the footer. Next, enter your SWISSGEAR order ID# (the number found in
                                your confirmation email), last name, and zip code. Then click the continue button
                                to display your order status and tracking information.
                            </p>
                        </Card>
                        <Card className=' p-5 m-5'>
                            <h3 className='text-center mb-3 text-danger'>HOW TO RETURN YOUR ORDER</h3>
                            <p className='text-center'>
                                Returning a recently purchased item? No problem! 
                                Just visit 
                                <Link to='#' className='text-danger' style={{textDecoration: 'none'}}> our return policy </Link>
                                to get started
                                with your return. We will ask a few simple questions
                                to get a better idea of the issue and how to best process
                                your return. Once approved you will be provided with a return
                                label and packing instructions for your return shipment.
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Login;