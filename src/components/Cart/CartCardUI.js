import { Card, Container, Button } from "react-bootstrap";
import { useState } from "react";
import Wrapper from "../../Helpers/Wrapper";


const CartCardUI = (props) => {

    const [hover, setHover] = useState(false);
    const mouseOver = () => {
        setHover(true);
    }
    const mouseOut = () => {
        setHover(false);
    }

    return (
        <Wrapper>
            <Container>
                <Card style={{ border: 'none' }} className='mb-3' onMouseOver={mouseOver} onMouseOut={mouseOut} >
                    <Card.Img variant='top' className='card-img p-2' src={props.image} alt={props.alt} />
                    <Card.Body>
                        <Card.Title className='mb-3' style={{fontSize: '1rem'}} >
                            {props.quantity} x {hover ? props.name : props.name.slice(0, 20) + '...'} 
                        </Card.Title>
                        
                            <Button type='submit' className='m-auto align-self-center d-flex' variant='danger' onClick={() => props.onCartRemove(props.product) | props.onReduceCountCart(props.product) }>
                                <i className="fa fa-trash m-auto align-self-center d-flex fa-2x" aria-hidden="true"></i>
                            </Button>
                    </Card.Body>
                </Card>
            </Container>
        </Wrapper>
    );

};

export default CartCardUI;