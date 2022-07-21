import Wrapper from "../../Helpers/Wrapper";
import CategoryTab from "../Home/CategoryTab";
import TopSelling from "../Home/TopSelling";

const Cat = ({ onAddToCart, onAddToWishlist, onAddcartCount, onAddwishlistCount }) => {
    return (
        <Wrapper>
            <CategoryTab />
            <TopSelling
                onCountWishlist={onAddwishlistCount}
                onCountCart={onAddcartCount}
                onWishlistCount={onAddwishlistCount}
                onClickAddWishlist={ onAddToWishlist}
                onClickAddCart={onAddToCart}
            />
        </Wrapper>
    );
};

export default Cat;