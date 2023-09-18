import { CardType } from "../../../redux/reducers/types";

export type FoundCardType = CardType | null | undefined

export interface DataCardProps {
    dataCard: CardType
}