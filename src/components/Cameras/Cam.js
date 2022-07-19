import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import CamerData from './CameraData';

const Cam = ({ onAddToCart, onAddToWihslist }) => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {CamerData.map((cameraProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6} style={{ marginTop: '8rem' }}>
                            <CardUI  
                                onAddToWishlistClick={onAddToWihslist}
                                onAddToCartClick={onAddToCart}
                                product={cameraProducts}
                                image={cameraProducts.image}
                                name={cameraProducts.name}
                                price={cameraProducts.price}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Cam;