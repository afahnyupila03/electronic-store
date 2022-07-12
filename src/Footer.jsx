import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "./Helpers/Wrapper";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Wrapper>

        {/* Footer Links */}
            <hr style={{ color: '#ff0000', padding: '.12rem', marginBottom: '-.1rem' }} />

            <Container fluid style={{ backgroundColor: '#004953'}}>
                <Container className='text-white p-5'>
                    <Row>
                        {/* About */}
                        <Col lg={3} md={4} sm={6} className='mb-3'>
                            <ul className='navbar-nav'>
                                <h3>ABOUT US</h3>
                                <p style={{ color: '#c0c0c0' }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut.
                                </p>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        <i className="fa fa-map-marker fa-1x mx-3" style={{ color: 'red' }} aria-hidden="true"></i>
                                        Espior Street
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        <i className="fa fa-phone fa-1x mx-3" style={{ color: 'red' }} aria-hidden="true"></i>
                                        +233 33 37 50
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        <i className="fa fa-envelope fa-1x mx-3" style={{ color: 'red' }} aria-hidden="true"></i>
                                        electro@gmail.com
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        {/* Categories */}
                        <Col lg={3} md={4} sm={6} className='mb-3'>
                            <ul className='navbar-nav'>
                                <h3>CATEGORIES</h3>
                                <li className='nav-item'>
                                    <Link to='/laptops' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Laptops
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/smartphones' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Smartphones
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/cameras' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Cameras
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/accessories' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Accessories
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        {/* Information */}
                        <Col lg={3} md={4} sm={6} className='mb-3'>
                            <ul className='navbar-nav'>
                                <h3>INFORMATION</h3>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        About Us
                                    </Link>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        contact Us
                                    </Link>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Privacy Policy
                                    </Link>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Orders and Returns
                                    </Link>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Terms &amp; conditions
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        {/* Service */}
                        <Col lg={3} md={4} sm={6} className='mb-3'>
                            <ul className='navbar-nav'>
                                <h3>SERVICE</h3>
                                <li className='nav-item'>
                                    <Link to='/login' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        My Account
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/cart' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        View Cart
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/wishlist' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Wishlist
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Track My Order
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/#' className='nav-link' style={{ color: '#c0c0c0' }}>
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid style={{ backgroundColor: '#004040'}}>
                {/* Footer Text */}
                <Container className='text-center'>
                    {/* Payment Methods */}
                    <Row>
                        <Col className='p-4'>
                            {/* Visa */}
                            <Link to='/#'>
                                <i className="fa fa-cc-visa fa-2x mx-2" aria-hidden="true"></i>
                            </Link>
                            {/* PayPal */}
                            <Link to='/#'>
                                <i className="fa fa-cc-paypal fa-2x mx-2" aria-hidden="true"></i>
                            </Link>
                            {/* Matster Card */}
                            <Link to='/#'>
                                <i className="fa fa-cc-mastercard fa-2x mx-2" aria-hidden="true"></i>
                            </Link>
                            {/* Discover */}
                            <Link to='/#'>
                                <i className="fa fa-cc-discover fa-2x mx-2" aria-hidden="true"></i>
                            </Link>
                        </Col>
                    </Row>
                    {/* Footer Text */}
                    <Row>
                        <Col>
                            <p className='p-4' style={{ color: '#c0c0c0', fontSize: '1.2rem' }}>
                                Copyright &copy;{new Date().getFullYear()} Electro. All rights reserved | This template is made with <i className="fa fa-heart text-danger" aria-hidden="true"></i> by PilaTech
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </Wrapper>
    );
};

export default Footer;