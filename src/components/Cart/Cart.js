import { Container } from 'react-bootstrap';
import Wrapper from '../../Helpers/Wrapper';
import NewProducts from '../Home/NewProducts';
import CartUI from './CartUI';

const Cart = ({carts, onAddToCart, onAddToWishlist }) => {

    return (
        <Wrapper>
            <Container>
                <CartUI onCart={carts} onAddToWishlistClick={onAddToWishlist} />
                <NewProducts
                    onClickAddCart={onAddToCart} 
                    onClickAddWishlist={onAddToWishlist}
                    />
            </Container>
        </Wrapper>
    );
}

export default Cart;