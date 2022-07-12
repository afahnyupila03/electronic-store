import { Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import TopSelling from "../Home/TopSelling";


const WishList = (props) => {
    return (
        <Wrapper>
            <Container>
                {props.wish}
                <TopSelling />
            </Container>
        </Wrapper>
    );
};

export default WishList;