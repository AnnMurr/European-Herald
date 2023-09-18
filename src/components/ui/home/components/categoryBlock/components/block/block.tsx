import { BlockWrapper, TitleNewsBlockText, StyledLink } from "./styledBlock";
import { CardType } from "../../../../../../../redux/reducers/types";
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";

interface BlockProps {
    filteredCards: Array<CardType>,
    name: string
}

export const Block = ({name , filteredCards}: BlockProps) => {

    return (
        <>
            <StyledLink to={`/category/${name}`}>
                <TitleNewsBlockText>{name}</TitleNewsBlockText>
            </StyledLink>
            <BlockWrapper>
                {filteredCards.map((item, index) => <NewsCard type={'smallCard'} key={uuidv4()} dataCard={item} />)}
            </BlockWrapper>
        </>
    )
}