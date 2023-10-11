import { BlockWrapper, TitleNewsBlockText, StyledLink } from "./styledBlock";
import { CardType } from "../../../../../../../redux/reducers/types";
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";
import { useContext } from "react";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

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