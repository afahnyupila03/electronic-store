import Wrapper from "../../Helpers/Wrapper";
import CategoryTab from "../Home/CategoryTab";
import TopSelling from "../Home/TopSelling";

const Cat = ({ onAddToCart, onAddToWishlist }) => {
    return (
        <Wrapper>
            <CategoryTab />
            <TopSelling 
                onClickAddWishlist={onAddToWishlist}
                onClickAddCart={onAddToCart}
            />
        </Wrapper>
    );
};

export default Cat;