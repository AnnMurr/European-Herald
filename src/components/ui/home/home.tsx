import { CategoryBlock, DailyNews, VariousNews, Weather } from ".";
import { useAppSelector } from "../../../redux/store/store";
import { Container, Wrapper } from "./styledHome";

export const Home = () => {
    const cardsFromRedux = useAppSelector((state) => state.newsCards.cards)
    const firstSixthCards = cardsFromRedux.slice(0, 6)
    const cardsForVariousNews = cardsFromRedux.slice(7, 19)

    return (
        <Container>
            <Wrapper>
                <DailyNews cards={firstSixthCards} />
                <CategoryBlock />
                <Weather />
                <VariousNews cards={cardsForVariousNews} />
            </Wrapper>
        </Container>
    )
}