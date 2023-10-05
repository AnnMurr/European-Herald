import { Container, InnerDateTabs, Wrapper } from "./styledArticle";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner/spinner";
import { FoundCardType } from "./types";
import { Title, Image, Text, Date } from ".";
import { CardType } from "../../../redux/reducers/types";
import { BookmarksBtn } from "./components/bookmarksBtn/bookmarksBtn";

export const Article = () => {
  const { articlename } = useParams()
  const dataCardsFromRedux = useAppSelector((state) => state.newsCards)
  const [card, setCard] = useState<CardType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    let foundCard: FoundCardType = null

    setIsLoading(true)
    const categoriesToSearch = [
      dataCardsFromRedux.cards,
      dataCardsFromRedux.filteredCards,
      dataCardsFromRedux.categorySports,
      dataCardsFromRedux.categoryHealth,
      dataCardsFromRedux.categoryArts,
      dataCardsFromRedux.categoryBusiness,
    ]

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