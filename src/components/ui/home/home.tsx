import { CategoryBlock, DailyNews, VariousNews, Weather } from ".";
import { useAppSelector } from "../../../redux/store/store";
import { Spinner } from "../../reusable/spinner/spinner";
import { Container, Wrapper } from "./styledHome";

export const Home = () => {
    const cardsFromRedux = useAppSelector((state) => state.newsCards.cards)
    const isLoading = useAppSelector((state) => state.newsCards.loading)
    const firstSixthCards = cardsFromRedux.slice(0, 6)
    const cardsForVariousNews = cardsFromRedux.slice(7, 19)

    return (
        <Container>
            <Wrapper>
                {isLoading ?
                    <Spinner /> :
                    <>
                        <DailyNews cards={firstSixthCards} />
                        <CategoryBlock />
                        <Weather />
                        <VariousNews cards={cardsForVariousNews} />
                    </>}
            </Wrapper>
        </Container>
    )
}