import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import SmartData from "./Smartdata";


const Smart = () => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {SmartData.map((smartProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6}>
                            <CardUI 
                            image={smartProducts.SmartImage}
                            name={smartProducts.SmartName}
                            price={smartProducts.SmartPrice}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Smart;