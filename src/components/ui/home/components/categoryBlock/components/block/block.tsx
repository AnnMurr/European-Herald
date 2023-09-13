import { Link } from "react-router-dom";
import { BlockWrapper, TitleNewsBlockText } from "./styledBlock";
import { CardType } from "../../../../../../../redux/reducers/types";
import { NewsCard } from "../../../../../../shared/newsCard/newsСard";
import { v4 as uuidv4 } from 'uuid';

interface BlockProps {
    filteredCards: Array<CardType>
}

export const Block = ({filteredCards}: BlockProps) => {

    return (
        <>
            <Link to={'/category/sports'}>
                <TitleNewsBlockText>Sports</TitleNewsBlockText>
            </Link>
            <BlockWrapper>
                {filteredCards.map((item, index) => <NewsCard type={'smallCard'} key={uuidv4()} dataCard={item} />)}
            </BlockWrapper>
        </>
    )
}