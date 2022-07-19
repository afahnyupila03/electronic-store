import { Container, Col, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import LaptopData from "./LaptopData";

const Lap = ({ onAddToCart, onAddToWishlist }) => {
    return (
        <Wrapper>
            <Container className='text-left p-5'>
                <Row>
                    {LaptopData.map((laptopProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={12} style={{ marginTop: '8rem' }}>
                            <CardUI
                                onAddToWishlistClick={onAddToWishlist}
                                onAddToCartClick={onAddToCart}
                                product={laptopProducts}
                                image={laptopProducts.image}
                                name={laptopProducts.name}
                                price={laptopProducts.price}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Lap;