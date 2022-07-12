import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Wrapper from './Helpers/Wrapper';

const NavbarTab = (props) => {

    return (
        <Wrapper>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#004040'}} className='p-2' variant="gray">
                <Container className='barlow'>
                    <Link to='/' className='navbar-brand text-danger' style={{ textDecoration: 'none', fontSize: '2rem' }}>
                        Electro.
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: '#c0c0c0'}}>
                        <h1>Menu</h1>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Home
                            </Link>
                            <Link to='/categories' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Categories
                            </Link>
                            <Link to='/laptops' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Laptops
                            </Link>
                            <Link to='/smartphones' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Smartphones
                            </Link>
                            <Link className='nav-link' to='/cameras' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Cameras
                            </Link>
                            <Link to='/accessories' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                Accessories
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to='./login' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                <i className="fa fa-user mx-1" aria-hidden="true"></i>
                                Login
                            </Link>
                            <Link to='./wishlist' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                <i className="fa fa-heart mx-1" aria-hidden="true"></i>
                                <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {props.counter}
                                </span>
                            </Link>
                            <Link to='/cart' className='nav-link' style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#c0c0c0' }}>
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                                <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {props.counter}
                                </span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Wrapper>
    );

};

export default NavbarTab;