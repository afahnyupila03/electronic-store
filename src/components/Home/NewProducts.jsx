import {  Col, Container, Row } from "react-bootstrap";
import CardUI from "../../UI/CardUI";
import ProductsData from "./ProductsData";
import '../styles.css';


const NewProducts = () => {
    return (
        <Container>
            <Row>
                <h1 className='p-5 barlow'>NEW PRODUCTS</h1>
                {ProductsData.map( (newProducts, index) => (
                    <Col key={index} lg={4} md={6} sm={2}>
                        <CardUI 
                            image={newProducts.ProductImage}
                            category={newProducts.ProductCategory}
                            name={newProducts.ProductName}
                            price={newProducts.ProductPrice}
                        />
                    </Col>
                ) )}

                {/* Trial */}
                
                
            </Row>
        </Container>
    );
};

export default NewProducts;