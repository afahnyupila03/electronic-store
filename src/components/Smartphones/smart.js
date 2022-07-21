import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import SmartData from "./Smartdata";


const Smart = ({  onAddToCart, onAddToWishlist, onAddcartCount, onAddwishlistCount }) => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {SmartData.map((smartProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6} style={{ marginTop: '8rem' }}>
                            <CardUI 
                                onAddToWishlistClick={onAddToWishlist}
                                onAddCartCountClick={onAddcartCount}
                                onAddWishlistCountClick={onAddwishlistCount}
                                onAddToCartClick={onAddToCart}
                                product={smartProducts}
                                image={smartProducts.image}
                                name={smartProducts.name}
                                price={smartProducts.price}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Smart;