import {  Col, Container, Row } from "react-bootstrap";
import CardUI from "../../UI/CardUI";
import ProductsData from "./ProductsData";
import '../styles.css';


const NewProducts = ({ onClickAddWishlist, onClickAddCart, onCountCart, onCountWishlist }) => {
    return (
        <Container>
            <Row>
                <h1 className='p-5 barlow'>NEW PRODUCTS</h1>
                {ProductsData.map( (newProducts, index) => (
                    <Col key={index} lg={4} md={6} sm={6}>
                        <CardUI 
                            onAddToWishlistClick={onClickAddWishlist}
                            onAddWishlistCountClick={onCountWishlist}
                            onAddCartCountClick={onCountCart}
                            onAddToCartClick={onClickAddCart}
                            product={newProducts}
                            image={newProducts.image}
                            category={newProducts.category}
                            name={newProducts.name}
                            price={newProducts.price}
                        />
                    </Col>
                ) )}

                {/* Trial */}
                
                
            </Row>
        </Container>
    );
};

export default NewProducts;