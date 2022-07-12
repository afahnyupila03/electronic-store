import Wrapper from "../../Helpers/Wrapper";
import CategoryTab from "./CategoryTab";
import NewProducts from "./NewProducts";
import TopSelling from "./TopSelling";

const Home = () => {
    return (
        <Wrapper className='p-5'>
            <CategoryTab />
            <NewProducts />
            <TopSelling />
        </Wrapper>
    );
};

export default Home;