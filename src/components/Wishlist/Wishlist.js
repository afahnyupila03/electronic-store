import { Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import TopSelling from "../Home/TopSelling";
import WishlistUi from "./WishlistUI";


const WishList = ({ wishlists, onAddToWishlist, onAddToCart }) => {

    

    return (
        <Wrapper>
            <Container>
                <WishlistUi onWishlist={wishlists} />
                <TopSelling 
                    onClickAddCart={onAddToCart} 
                    onClickAddWishlist={onAddToWishlist}  
                />
            </Container>
        </Wrapper>
    );
};

export default WishList;