import { Col , Row, Card, Button, Container } from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper';

const CartUI = ({ onCart, props }) => {

    const totalPrice = onCart.reduce((total, product) => total + product.price * product.quantity, 0);
    const finalPrice = totalPrice.toFixed(2);
    const totalQuantity = onCart.reduce((total, product) => total + product.quantity, 0);

    return (
        <Wrapper>
            <Container>
                <div className="cart-ui" style={{ marginTop: '8rem' }}>

                    <div className="cart-ui__header">
                        <div className="cart-ui__header__title">
                            <h1>Cart</h1>
                        </div>
                        <div className="cart-ui__header__total p-3">
                            <h2>Total: <span className='text-danger'>${finalPrice}</span></h2>
                            <h2>Quantity: <span className='text-danger'>{totalQuantity}</span></h2>
                        </div>
                    </div>

                    <div className="cart-ui__body">
                        <div className="cart-ui__body__empty">
                            <Row>
                                {onCart.length === 0 ? <h1>Your cart is empty</h1> : (
                                    onCart.map((product, index) => (
                                        <Col key={index} lg={4} md={6} sm={12}>
                                            <Card style={{ border: 'none' }} className='mb-3 p-3'>
                                                <div className="cart-ui__body__item" key={product.id}>

                                                    <div className="cart-ui__body__item__image">
                                                        <Card.Img variant='top' className='card-img' src={product.image} />
                                                    </div>
                                                    <div className="cart-ui__body__item__info mt-5">
                                                        <h3>{product.quantity} x {product.name}</h3>
                                                    </div>

                                                    <div className="cart-ui-buttons mt-5">
                                                        <Row>
                                                            <Button type='submit' style={{ fontSize: '1rem' }} variant='danger' onClick={() => props.onAddToWishlistClick(props.product)}>
                                                                Remove
                                                            </Button>

                                                        </Row>
                                                    </div>

                                                </div>
                                            </Card>
                                        </Col>
                                    ))
                                )}
                            </Row>
                        </div>
                    </div>

                </div>
            </Container>
        </Wrapper>
    );
}

export default CartUI;