import { CardType } from "../../../redux/reducers/types"

export interface NewsCardProps {
    type: string,
    dataCard: CardType,
    cardClass?: string,
}

export interface CardStylesProps {
    cardclass?: string
    datacard?: CardType,
    cardtype?: string
}