import { CardType } from "../../../redux/reducers/cardsReducer/types";

export type FoundCardType = CardType | null | undefined

export interface DataCardProps {
    dataCard: CardType
}
export interface BookmarksBtnProps {
    dataCard: CardType
}