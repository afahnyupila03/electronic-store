
import Wrapper from './../../Helpers/Wrapper';
import { Col, Container, Row } from 'react-bootstrap';
import SellingData from './SellingData';
import CardUI from './../../UI/CardUI';

const TopSelling = () => {
    return (
        <Wrapper>
            <Container>
                <h1 className='p-5 rubik'>TOP SELLING</h1>
                <Row>
                    {SellingData.map ( (sellingProducts, index) => (
                        <Col key={index} lg={3} md={6} sm={12}>
                            <CardUI 
                                image={sellingProducts.ProductImage}
                                name={sellingProducts.ProductName}
                                price={sellingProducts.ProductPrice}
                                category={sellingProducts.ProductCategory}
                            />
                        </Col>
                    ) )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default TopSelling;