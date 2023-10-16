import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchCategoryNews } from "../../../redux/reducers/cardsReducer/cardsReducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { Spinner } from "../../reusable/spinner/spinner";
import { RenderCards } from "../../reusable/paginationCards/renderCards";

import { Container, Wrapper } from "./styledfFlteredCategory";

export const FilteredCategory = () => {
    const { categoryname } = useParams()
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
                    <RenderCards type={'filteredCards'} />}
            </Wrapper>
        </Container >
    )
}