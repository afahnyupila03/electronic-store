import Wrapper from "../../Helpers/Wrapper";
import { Row, Col } from 'react-bootstrap';
import WishlistCartCardUI from "./WishlistCartCardUI";

const WishlistUi = ({ onAddToCartClick, onWishlist, wishlistRemove, reduceCountWishlist, onAddCartCountClick }) => {

    const totalPrice = onWishlist.reduce((total, product) => total + product.price, 0);
    const finalPrice = totalPrice.toFixed(2);

    return (
        <Wrapper style={{marginTop: '8rem'}}>
            <div className="cart-ui" style={{ marginTop: '8rem' }}>

                <div className="cart-ui__header">
                    <div className="cart-ui__header__title">
                        <h2>Wishlist</h2>
                        <h2>Price <span className='text-danger'>{finalPrice}</span> </h2>
                    </div>
                </div>

                <div className="cart-ui__body">
                    <div className="cart-ui__body__empty">
                        <Row>
                            {onWishlist.length === 0 ? <h1>Your wishlist is empty</h1> : (
                                onWishlist.map((product, index) => (
                                    <Col key={index} lg={3} md={6} sm={12}>
                                        <WishlistCartCardUI 
                                            product={product}
                                            onCartClickAdd={onAddToCartClick}
                                            onCartCountClickAdd={onAddCartCountClick}
                                            onWishlistRemove={wishlistRemove}
                                            onReduceCountWishlist={reduceCountWishlist}
                                            name={product.name}
                                            image={product.image}
                                        />
                                    </Col>
                                )) 
                            )}
                        </Row>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default WishlistUi;