import { Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import TopSelling from "../Home/TopSelling";
import WishlistUi from "./WishlistUI";


const WishList = ({ wishlists, onReduceWishlistCount, onAddToWishlist, onAddToCart, onRemoveFromWishlist, onAddcartCount, onAddwishlistCount }) => {

    

    return (
        <Wrapper>
            <Container>
                <WishlistUi onAddCartCountClick={onAddcartCount} onAddToCartClick={onAddToCart} onWishlist={wishlists} reduceCountWishlist={onReduceWishlistCount} wishlistRemove={onRemoveFromWishlist} />
                <TopSelling 
                    onClickAddCart={onAddToCart} 
                    onClickAddWishlist={onAddToWishlist}
                    onCountCart={onAddcartCount}
                    onCountWishlist={onAddwishlistCount}
                />
            </Container>
        </Wrapper>
    );
};

export default WishList;