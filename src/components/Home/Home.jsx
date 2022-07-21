import Wrapper from "../../Helpers/Wrapper";
import CategoryTab from "./CategoryTab";
import NewProducts from "./NewProducts";
import TopSelling from "./TopSelling";

const Home = ({ onAddToCart, onAddToWishlist, onAddcartCount, onAddwishlistCount }) => {
    return (
        <Wrapper className='p-5'>
            <CategoryTab />
            <NewProducts 
                onCountWishlist={onAddwishlistCount} 
                onCountCart={onAddcartCount} 
                onClickAddWishlist={onAddToWishlist} 
                onClickAddCart={onAddToCart}  
            />
            <TopSelling 
                onCountCart={onAddcartCount}
                onCountWishlist={onAddwishlistCount}
                onClickAddWishlist={onAddToWishlist} 
                onClickAddCart={onAddToCart} 
            />
        </Wrapper>
    );
};

export default Home;