import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CardType } from "../../../redux/reducers/cardsReducer/types";
import { useAppSelector } from "../../../redux/store/store";

import { Spinner } from "../spinner/spinner";
import { FoundCardType } from "./types";
import { Title, Image, Text, Date, BookmarksBtn } from ".";
import { GoBackBtn } from "../backBtn/backBtn";

import { Container, InnerDateTabs, Wrapper } from "./styledArticle";

export const Article = () => {
  const { articlename } = useParams()
  const dataCardsFromRedux = useAppSelector((state) => state)
  const [card, setCard] = useState<CardType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    let foundCard: FoundCardType = null
    const userBookmarks = dataCardsFromRedux.user.userData?.bookmarks

    setIsLoading(true)
    const categoriesToSearch = [
      dataCardsFromRedux.newsCards.cards,
      dataCardsFromRedux.newsCards.filteredCards,
      dataCardsFromRedux.newsCards.categorySports,
      dataCardsFromRedux.newsCards.categoryHealth,
      dataCardsFromRedux.newsCards.categoryArts,
      dataCardsFromRedux.newsCards.categoryBusiness,
    ]
    
    userBookmarks && categoriesToSearch.push(userBookmarks)

    categoriesToSearch.forEach((category) => {
      !foundCard && (foundCard = category.find((dataCard) => dataCard.uri === articlename))
    })

    if (foundCard) {
      setCard(foundCard)
      setIsLoading(false)
    }
  }, [articlename, dataCardsFromRedux])

  return (
    <Container>
      <GoBackBtn />
      {card && !isLoading ?
        <Wrapper>
          <Title dataCard={card} />
          <Image dataCard={card} />
          <InnerDateTabs>
            <Date dataCard={card} />
            <BookmarksBtn dataCard={card} />
          </InnerDateTabs>
          <Text dataCard={card} />
        </Wrapper> : <Spinner />}
    </Container>
  )
}