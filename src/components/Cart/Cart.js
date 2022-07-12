import { Container } from 'react-bootstrap';
import Wrapper from '../../Helpers/Wrapper';
import NewProducts from '../Home/NewProducts';

const Cart = (props) => {

    

    return (
        <Wrapper>
            <Container>
                {props.cartart}
                <NewProducts />
            </Container>
        </Wrapper>
    );
}

export default Cart;