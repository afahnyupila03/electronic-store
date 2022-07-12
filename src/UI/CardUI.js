import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Wrapper from "../Helpers/Wrapper";

const CardUI = (props) => {

        // Const for Count, Cart and Wishlist
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [count, setCount] = useState(9);
    
    // Const Functions for Count, Cart and Wishlist
    const onCount = () => {
        setCount(count + 1);
    };
    const addCartItems = (items) => {
        setCartItems((prevItems) => {
            return [
                ...prevItems,
                items
            ];
        })
    };
    const addWishlist = (items) => {
        setWishlist((prevItems) => {
            return [
                ...prevItems,
                items
            ];
        })
    };

    // Combined Functions
    const onAddToCart = (items) => {
        onCount();
        addCartItems(items);
    }
    const onAddToWishlist = (items) => {
        onCount();
        addWishlist(items);
    }


    return (
        <Wrapper>
            
            <Card className='mb-3' style={{ border: 'none' }}>
                <Card.Img variant='top' className='card-img p-2' src={props.image} alt={props.alt} />
                <Card.Body className='my-3'>
                    <Card.Subtitle className='mb-3 barlow'>{props.category}</Card.Subtitle>
                    <Card.Title className='mb-3'>{props.name}</Card.Title>
                    <Card.Text className='text-danger' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {props.price}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button type='submit' wish={wishlist} counter={count} onClick={onAddToWishlist} variant='danger'>
                                <i className="fa fa-heart" aria-hidden="true"></i>
                            </Button></Col>
                        <Col>
                            <Button type='submit' cart={cartItems} counter={count} onClick={onAddToCart} variant='danger'>
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