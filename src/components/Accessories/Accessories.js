import { Row, Col, Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import AccessData from "./AccessData";


const Accessories = ({ onAddToCart, onAddToWishlist }) => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {AccessData.map((accessProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6} style={{ marginTop: '8rem' }}>
                            <CardUI 
                                onAddToWishlistClick={onAddToWishlist}
                                onAddToCartClick={onAddToCart}
                                product={accessProducts}
                                image={accessProducts.image}
                                name={accessProducts.name}
                                price={accessProducts.price}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Accessories;