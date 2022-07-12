import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import CardUI from "../../UI/CardUI";
import CamerData from './CameraData';

const Cam = () => {
    return (
        <Wrapper>
            <Container className='p-5'>
                <Row>
                    {CamerData.map((cameraProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={6}>
                            <CardUI 
                                image={cameraProducts.CameraImage}
                                name={cameraProducts.CameraName}
                                price={cameraProducts.CameraPrice}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Cam;