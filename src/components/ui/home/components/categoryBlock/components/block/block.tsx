import { useContext } from "react";

import { CardType } from "../../../../../../../redux/reducers/cardsReducer/types";
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

import { BlockWrapper, TitleNewsBlockText, StyledLink } from "./styledBlock";
interface BlockProps {
    filteredCards: Array<CardType>,
    name: string
}

export const Block = ({ name, filteredCards }: BlockProps) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <>
            <StyledLink themestyles={themeContext.themeStyles} to={`/category/${name}`}>
                <TitleNewsBlockText>{name}</TitleNewsBlockText>
            </StyledLink>
            <BlockWrapper>
                {filteredCards.map((item) => <NewsCard type={'smallCard'} key={uuidv4()} dataCard={item} />)}
            </BlockWrapper>
        </>
    )
}