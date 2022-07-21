import { Container } from 'react-bootstrap';
import Wrapper from '../../Helpers/Wrapper';
import NewProducts from '../Home/NewProducts';
import CartUI from './CartUI';

const Cart = ({carts, onReduceCartCount, onAddToCart, onAddToWishlist, onRemoveFromCart, onAddwishlistCount, onAddcartCount }) => {

    return (
        <Wrapper>
            <Container>
                <CartUI onCart={carts} reduceCountCart={onReduceCartCount} cartRemove={onRemoveFromCart} />
                <NewProducts
                    onClickAddCart={onAddToCart} 
                    onClickAddWishlist={onAddToWishlist}
                    onCountWishlist={onAddwishlistCount}
                    onCountCart={onAddcartCount}
                    />
            </Container>
        </Wrapper>
    );
}

export default Cart;