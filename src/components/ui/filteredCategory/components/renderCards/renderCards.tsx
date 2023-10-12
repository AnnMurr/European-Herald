import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../../../redux/store/store";
import { CardType } from "../../../../../redux/reducers/types";
import { Button } from "../../../../reusable/button/button";
import { NewsCard } from "../../../../reusable/newsCard/newsСard";
import { BtnInner, CardsInner } from "./styledRenderCards";
import { v4 as uuidv4 } from 'uuid';

export const RenderCards = () => {
    const cardsFromRedux = useAppSelector((state) => state.newsCards.filteredCards)
    const visibleItemsOnpage = 10
    const [currentPage, setCurrentPage] = useState(1)
    const [cards, setCards] = useState<Array<CardType>>([])
    const scrollPosition = useRef<null | number>(null)

    useEffect(() => {
        const start = (currentPage - 1) * visibleItemsOnpage
        const end = start + visibleItemsOnpage
        setCards(prevData => [...prevData, ...cardsFromRedux.slice(start, end)])
    }, [currentPage, cardsFromRedux])

    const getMoreItems = () => {
        scrollPosition.current = window.scrollY
        setCurrentPage(prev => prev + 1)
        setTimeout(() => scrollPosition.current && window.scrollTo(0, scrollPosition.current), 100)
    }

    return (
        <>
            <CardsInner>
                {cards.map((item) => <NewsCard cardClass={'card'} type={'BigCard'} key={uuidv4()} dataCard={item} />)}
            </CardsInner>
            {cardsFromRedux.length > currentPage * visibleItemsOnpage ?
                <BtnInner>
                    <Button func={getMoreItems} type={'button'} text={'Lern more >>'} />
                </BtnInner> :
                null}
        </>
    )
}