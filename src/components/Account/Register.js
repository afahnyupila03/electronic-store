import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import { useRef } from 'react';

const Register = () => {

    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const regionRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const RegisterData = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            region: regionRef.current.value
        };
        console.log(RegisterData);

        nameRef.current.value = "";
        usernameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        phoneRef.current.value = "";
        addressRef.current.value = "";
        cityRef.current.value = "";
        regionRef.current.value = "";

    }

    return (
        <Wrapper>
            <Container style={{marginTop: '8rem'}}>
                <Card className='p-5 m-5'>
                    <Form onSubmit={handleSubmit} >
                        <h1 className='text-center mb-5 text-danger'>Create An Account</h1>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>First and Last Names</Form.Label>
                                <Form.Control type="text" ref={nameRef} autoComplete='true'  placeholder="First and Last Names" />
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" ref={usernameRef} autoComplete='true' placeholder="Username" />
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} autoComplete='true' placeholder="Enter email" />
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} autoComplete='true' placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" ref={addressRef} autoComplete='true' />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control ref={cityRef} autoComplete='true' />
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Region</Form.Label>
                                <Form.Select ref={regionRef} defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>North Region</option>
                                    <option>West Region</option>
                                    <option>South Region</option>
                                    <option>East Region</option>
                                    <option>NorthWest Region</option>
                                    <option>SouthWest Region</option>
                                    <option>FarNorth Region</option>
                                    <option>Center Region</option>
                                    <option>Litoral Region</option>
                                    <option>Adamawa Region</option>
                                </Form.Select>
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type='tel' ref={phoneRef} autoComplete='true' placeholder="Phone Number" />
                                <Form.Text className="text-danger">
                                    required<span>***</span>
                                </Form.Text>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Accept Electro Terms and Condition." />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Male" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Female" />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </Card>
            </Container>
        </Wrapper>
    );
};

export default Register;