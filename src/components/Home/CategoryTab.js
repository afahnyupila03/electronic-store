import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Wrapper from "../../Helpers/Wrapper";


const CategoryTab = () => {
    return (
        <Wrapper>
            <Container>
                <Row className='p-5' style={{marginTop: '8rem'}}>
                    {/* Laptop Category */}
                    <Col lg={3} md={6} sm={12} className='mb-5' style={{border: 'none'}}>
                        <Card style={{ border: 'none', textAlign: 'center' }}>
                            <Card.Img variant="top" className='card-img' src='https://images-na.ssl-images-amazon.com/images/I/71zZiQGzc5L._AC_UL604_SR604,400_.jpg' />
                            <Card.Title className='p-2 mt-4' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                Laptop Collection
                            </Card.Title>
                                <Link to='/laptops' className='text-danger' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                    Shop Now
                                    <i className="fa fa-arrow-circle-right mx-2" aria-hidden="true"></i>
                                </Link>
                        </Card>
                    </Col>
                    {/* Accessroies Collection */}
                    <Col lg={3} md={6} sm={12} className='mb-5'>
                        <Card style={{ border: 'none', textAlign: 'center' }}>
                            <Card.Img variant='top' className='card-img' src='https://images-na.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_UL604_SR604,400_.jpg' />
                            <Card.Title className='p-2 mt-4' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                Accessories Collection
                            </Card.Title>
                                <Link to='/accessories' className='text-danger' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                    Shop Now
                                    <i className="fa fa-arrow-circle-right mx-2" aria-hidden="true"></i>
                                </Link>
                        </Card>
                    </Col>
                    {/* Cameras Collection */}
                    <Col lg={3} md={6} sm={12} className='mb-5'>
                        <Card style={{ border: 'none', textAlign: 'center' }}>
                            <Card.Img variant='top' className='card-img' src='https://images-na.ssl-images-amazon.com/images/I/81AUQk0y5vL._AC_UL302_SR302,200_.jpg' />
                            <Card.Title className='p-2 mt-4' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                Camera Collection
                            </Card.Title>
                                <Link to='/cameras' className='text-danger' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                    Shop Now
                                    <i className="fa fa-arrow-circle-right mx-2" aria-hidden="true"></i>
                                </Link>
                        </Card>
                    </Col>
                    {/* Smarthones Collection */}
                    <Col lg={3} md={6} sm={12} className='mb-5'>
                        <Card style={{ border: 'none', textAlign: 'center' }}>
                            <Card.Img variant='top' className='card-img' src='https://images-na.ssl-images-amazon.com/images/I/31PpUfTCiFL._AC_UL604_SR604,400_.jpg' />
                            <Card.Title className='p-2 mt-4' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                Smartphone Collection
                            </Card.Title>
                                <Link to='/smartphones' className='text-danger' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                    Shop Now
                                    <i className="fa fa-arrow-circle-right mx-2" aria-hidden="true"></i>
                                </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default CategoryTab;