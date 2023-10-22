import { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from "../../../redux/store/store";
import { CardType } from "../../../redux/reducers/cardsReducer/types";
import { NewsCard } from "../newsCard/newsСard";
import { Button } from "../button/button";

import { BtnInner, CardsInner } from "./styledRenderCards";
interface RenderCardsProps {
    type: string,
}

export const RenderCards: React.FC<RenderCardsProps> = ({ type }) => {
    const filteredCards = useAppSelector((state) => state.newsCards.filteredCards)
    const foundСards = useAppSelector((state) => state.newsCards.foundCards)
    const cardsFromRedux = type === 'foundСards' ? foundСards : filteredCards
    const visibleItemsOnpage = 4
    const [currentPage, setCurrentPage] = useState(1)
    const [cards, setCards] = useState<Array<CardType>>([])
    const scrollPosition = useRef<null | number>(null)

    useEffect(() => {
        const pageFromStore = sessionStorage.getItem('page')
        pageFromStore && setCurrentPage(JSON.parse(pageFromStore))
     }, [])

    useEffect(() => {
        cards.length > 0 && setCards([])
    }, [cardsFromRedux])

    useEffect(() => {
        const start = (currentPage - 1) * visibleItemsOnpage
        const end = start + visibleItemsOnpage
        setCards(prevData => {
            const comparedCards = prevData.length === cardsFromRedux.length && prevData.every((value, index) => value.uri === cardsFromRedux[index].uri)
            if (!comparedCards) {
                return [...prevData, ...cardsFromRedux.slice(start, end)]
            } else {
                return prevData
            }
        })

        

    }, [currentPage, cardsFromRedux])

    useEffect(() => {
        sessionStorage.setItem('page', JSON.stringify(1))
    }, [cardsFromRedux])

    const getMoreItems = () => {
        sessionStorage.setItem('page', JSON.stringify(currentPage +1))
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
                    <Button style={{textTransform: 'initial'}} func={getMoreItems} type={'button'} text={'Show more ▼'} />
                </BtnInner> :
                null}
        </>
    )
}