import { useAppSelector } from "../../../redux/store/store";
import { NewsCard } from "../../shared/newsCard/newsСard";
import { Container, Wrapper } from "./styledHome";
import { v4 as uuidv4 } from 'uuid';

export const Home = () => {
    const cardsFromRedux = useAppSelector((state) => state.cards)
    const firstSixthCards = cardsFromRedux.slice(0, 6)

    return (
        <Container>
            <Wrapper>
                {firstSixthCards.map((item, index) => <NewsCard type={index < 2 ? 'BigCard' : 'smallCard'} key={uuidv4()} dataCard={item} />)}
            </Wrapper>
        </Container>
    )
}