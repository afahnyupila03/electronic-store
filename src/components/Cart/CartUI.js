import { Col , Row, Container } from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper';
import CartCardUI from './CartCardUI';

const CartUI = ({ onCart, cartRemove, reduceCountCart }) => {

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

                    <div className="cart-ui__body mt-3">
                        <div className="cart-ui__body__empty">
                            <Row>
                                {onCart.length === 0 ? <h1>Your cart is empty</h1> : (
                                    onCart.map((product, index) => (
                                        <Col key={index} lg={3} md={6} sm={12}>
                                            <CartCardUI 
                                                product={product}
                                                onCartRemove={cartRemove}
                                                onCartReduceCount={reduceCountCart}
                                                image={product.image}
                                                quantity={product.quantity}
                                                name={product.name}
                                            />
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