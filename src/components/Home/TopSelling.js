
import Wrapper from './../../Helpers/Wrapper';
import { Col, Container, Row } from 'react-bootstrap';
import SellingData from './SellingData';
import CardUI from './../../UI/CardUI';

const TopSelling = ({ onClickAddWishlist, onClickAddCart, onCountCart, onCountWishlist }) => {
    return (
        <Wrapper>
            <Container>
                <h1 className='p-5 rubik'>TOP SELLING</h1>
                <Row>
                    {SellingData.map ( (sellingProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6}>
                            <CardUI
                                onAddCartCountClick={onCountCart}
                                onAddWishlistCountClick={onCountWishlist}
                                onAddToWishlistClick={onClickAddWishlist}
                                onAddToCartClick={onClickAddCart}
                                product={sellingProducts}
                                image={sellingProducts.image}
                                category={sellingProducts.category}
                                name={sellingProducts.name}
                                price={sellingProducts.price}
                            />
                        </Col>
                    ) )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default TopSelling;