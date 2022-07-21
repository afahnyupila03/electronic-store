import { Button, Card, Col, Row } from "react-bootstrap";
import Wrapper from "../Helpers/Wrapper";

const CardUI = (props) => {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e);
    };

    return (
        <Wrapper>
            
            <Card className='mb-3' onSubmit={handleSubmit} style={{ border: 'none' }}>
                <Card.Img variant='top' className='card-img p-2' src={props.image} alt={props.alt} />
                <Card.Body className='my-3'>
                    <Card.Subtitle className='mb-3 barlow'>{props.category}</Card.Subtitle>
                    <Card.Title className='mb-3'>{props.name}</Card.Title>
                    <Card.Text className='text-danger' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        $ {props.price}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button type='submit' variant='danger' onClick={() => props.onAddToWishlistClick(props.product) | props.onAddWishlistCountClick(props.product) }>
                                <i className="fa fa-heart" aria-hidden="true"></i>
                            </Button></Col>
                        <Col>
                            <Button type='submit' variant='danger' onClick={() => props.onAddToCartClick(props.product) | props.onAddCartCountClick(props.product) }>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Wrapper>
    );
};

export default CardUI;