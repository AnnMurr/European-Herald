import { useEffect } from "react";
import { Container, Wrapper } from "./styledfFlteredCategory";
import { fetchCategoryNews } from "../../../redux/reducers/cardsReducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { NewsCard } from "../../shared/newsCard/newsСard";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const FilteredCategory = () => {
    const { categoryname } = useParams()
    const category = categoryname && categoryname.charAt(0).toUpperCase() + categoryname.slice(1)
    
    const dispatch = useAppDispatch()
    const cardsFromRedux = useAppSelector((state) => state.filteredCards)

    useEffect(() => {
        dispatch((fetchCategoryNews(category!) ))
    }, [categoryname])

    return (
        < Container >
            <Wrapper>
               {cardsFromRedux.map((item) => <NewsCard cardClass={'card'} type={'BigCard'} key={uuidv4()} dataCard={item} /> ) }
            </Wrapper>
        </Container >
    )
}