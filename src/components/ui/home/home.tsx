import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { Container, Wrapper } from "./styledHome";
import { fetchCards, fetchCategoryNewsBlocks } from "../../../redux/reducers/cardsReducer";
import { VariousNews } from "./components/variousNews/variousNews";
import { CategoryBlock } from "./components/categoryBlock/categoryBlock";

export const Home = () => {
    const cardsFromRedux = useAppSelector((state) => state.cards)
    const firstSixthCards = cardsFromRedux.slice(0, 6)
    const dispatch = useAppDispatch()
    const categories = ['Business', 'Arts', 'Health', 'Sports']

    useEffect(() => {
        dispatch((fetchCards()))
        categories.forEach(category => dispatch(fetchCategoryNewsBlocks(category)))
    }, [])



    return (
        <Container>
            <Wrapper>
                <VariousNews cards={firstSixthCards} />
                <CategoryBlock />
            </Wrapper>
        </Container>
    )
}