import Wrapper from "../../Helpers/Wrapper";
import { Row, Col, Card, Button } from 'react-bootstrap';

const WishlistUi = ({ onWishlist, wishlistRemove, reduceCountWishlist }) => {



    return (
        <Wrapper style={{marginTop: '8rem'}}>
            <div className="cart-ui" style={{ marginTop: '8rem' }}>

                <div className="cart-ui__header">
                    <div className="cart-ui__header__title">
                        <h1>Wishlist</h1>
                    </div>
                </div>

                <div className="cart-ui__body">
                    <div className="cart-ui__body__empty">
                        <Row>
                            {onWishlist.length === 0 ? <h1>Your wishlist is empty</h1> : (
                                onWishlist.map((product, index) => (
                                    <Col key={index} lg={4} md={6} sm={12}>
                                        <Card style={{ border: 'none' }} className='mb-3 p-3'>
                                            <div className="cart-ui__body__item" key={product.id}>

                                                <div className="cart-ui__body__item__image">
                                                    <Card.Img variant='top' className='card-img' src={product.image} />
                                                </div>
                                                <div className="cart-ui__body__item__info mt-5 text-center">
                                                    <h3>{product.name.slice(0, 19)}</h3>
                                                </div>

                                                <div className="cart-ui-buttons mt-5">
                                                    <Button type='submit' onClick={() => wishlistRemove(product) | reduceCountWishlist(product) } className='m-auto align-self-center d-flex' style={{fontSize: '1.5rem'}} variant='danger'>
                                                        Remove
                                                    </Button>
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
        </Wrapper>
    );
};

export default WishlistUi;