import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Wrapper from "../Helpers/Wrapper";

const CardUI = (props) => {

    const [hover, setHover] = useState(false);
    const mouseOver = () => {
        setHover(true);
    }
    const mouseOut = () => {
        setHover(false);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e);
    };

    return (
        <Wrapper>
            
            <Card className='mb-2' onSubmit={handleSubmit} onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ border: 'none' }}>
                <Card.Img variant='top' className='card-img p-2' src={props.image} alt={props.alt} />
                <Card.Body>
                    <Card.Subtitle className='mb-3 barlow'>{props.category}</Card.Subtitle>
                        { hover ? <Card.Title className='mb-3' style={{fontSize: '1rem'}} >{props.name}</Card.Title> : <Card.Title className='mb-3' style={{fontSize: '1rem'}} >{props.name.slice(0, 20)} ...</Card.Title>}
                    <Card.Text className='text-danger' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        $ {props.price.toFixed(2)}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button type='submit' variant='danger' onClick={() => props.onAddToWishlistClick(props.product) | props.onAddWishlistCountClick(props.product) }>
                                <i className="fa fa-heart m-auto align-self-center d-flex fa-2x" aria-hidden="true"></i>
                            </Button></Col>
                        <Col>
                            <Button type='submit' variant='danger' onClick={() => props.onAddToCartClick(props.product) | props.onAddCartCountClick(props.product) }>
                                <i className="fa fa-shopping-cart m-auto align-self-center d-flex fa-2x" aria-hidden="true"></i>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Wrapper>
    );
};

export default CardUI;