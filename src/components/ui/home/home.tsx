import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { Container, Wrapper } from "./styledHome";
import { fetchCategoryNewsBlocks } from "../../../redux/reducers/cardsReducer";
import { CategoryBlock } from "./components/categoryBlock/categoryBlock";
import { DailyNews } from "./components/dailyNews/dailyNews";
import { VariousNews } from "./components/variousNews/variousNews";

export const Home = () => {
    const cardsFromRedux = useAppSelector((state) => state.newsCards.cards)
    const firstSixthCards = cardsFromRedux.slice(0, 6)
    const dispatch = useAppDispatch()
    const categories = ['Business', 'Arts', 'Health', 'Sports']
    const cardsForVariousNews = cardsFromRedux.slice(7, 19)

    useEffect(() => {
        categories.forEach(category => dispatch(fetchCategoryNewsBlocks(category)))
    }, [])

    return (
        <Container>
            <Wrapper>
                <DailyNews cards={firstSixthCards} />
                <CategoryBlock />
                <VariousNews cards={cardsForVariousNews} />
            </Wrapper>
        </Container>
    )
}