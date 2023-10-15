import { Theme, ThemeType } from "../../../contexts/themeContext/types";
import { CardType } from "../../../redux/reducers/cardsReducer/types";

export interface NewsCardProps {
    type: string,
    dataCard: CardType,
    cardClass?: string,
}

export interface CardStylesProps {
    cardclass?: string,
    datacard?: CardType,
    cardtype?: string,
    themestyles?: Theme,
    theme?: ThemeType
}