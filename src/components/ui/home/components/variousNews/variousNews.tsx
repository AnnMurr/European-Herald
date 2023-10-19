import { useContext } from "react";

import { CardType } from "../../../../../redux/reducers/cardsReducer/types";
import { NewsCard } from "../../../../reusable/newsCard/newsСard";
import { v4 as uuidv4 } from "uuid";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Block, TitleText } from "./styledVariousNews";
import { useAppSelector } from "../../../../../redux/store/store";

interface VariousNewsProps {
    cards: Array<CardType>
}

export const VariousNews: React.FC<VariousNewsProps> = ({ cards }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const isLoading = useAppSelector((state) => state.newsCards.loading)

    return (
        <>
            {!isLoading ?
                <>
                    <div>
                        <TitleText themestyles={themeContext.themeStyles}>Various News</TitleText>
                    </div>
                    <Block>
                        {cards.map((item) => <NewsCard cardClass={'card'} type={'smallCard'} key={uuidv4()} dataCard={item} />)}
                    </Block>
                </> : null}
        </>
    )
}