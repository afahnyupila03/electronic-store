import Wrapper from "../../Helpers/Wrapper";
import CategoryTab from "./CategoryTab";
import NewProducts from "./NewProducts";
import TopSelling from "./TopSelling";

const Home = ({ onAddToCart, onAddToWishlist }) => {
    return (
        <Wrapper className='p-5'>
            <CategoryTab />
            <NewProducts onClickAddWishlist={onAddToWishlist} onClickAddCart={onAddToCart}  />
            <TopSelling onClickAddWishlist={onAddToWishlist} onClickAddCart={onAddToCart} />
        </Wrapper>
    );
};

export default Home;