import { Container, Col, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import LaptopData from "./LaptopData";

const Lap = () => {
    return (
        <Wrapper>
            <Container className='text-left p-5'>
                <Row>
                    {LaptopData.map((laptopProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={12}>
                            <CardUI 
                                image={laptopProducts.LaptopImage}
                                name={laptopProducts.LaptopName}
                                price={laptopProducts.LaptopPrice}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Lap;