import { Row, Col, Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import AccessData from "./AccessData";


const Accessories = () => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {AccessData.map((accessProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6}>
                            <CardUI
                                image={accessProducts.AccessImage}
                                name={accessProducts.AccessName}
                                price={accessProducts.AccessPrice}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Accessories;