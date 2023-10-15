import { useEffect } from "react";
import { Container, Wrapper } from "./styledfFlteredCategory";
import { fetchCategoryNews } from "../../../redux/reducers/cardsReducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { useParams } from "react-router-dom";
import { Spinner } from "../../reusable/spinner/spinner";
import { RenderCards } from "../../reusable/paginationCards/renderCards";

export const FilteredCategory = () => {
    const { categoryname } = useParams()
    const filteredCards = useAppSelector((state) => state.newsCards.filteredCards)
    const category = categoryname && categoryname.charAt(0).toUpperCase() + categoryname.slice(1)
    const isLoading = useAppSelector((state) => state.newsCards.loading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch((fetchCategoryNews(category!)))
    }, [categoryname])

    return (
        <Container>
            <Wrapper>
                {isLoading ?
                    <Spinner /> :
                    <RenderCards type={'filteredCards'} dataCards={filteredCards} />}
            </Wrapper>
        </Container >
    )
}