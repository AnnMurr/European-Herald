import { Link } from "react-router-dom";
import { BlockWrapper, TitleNewsBlockText } from "./styledBlock";
import { CardType } from "../../../../../../../redux/reducers/types";
import { NewsCard } from "../../../../../../shared/newsCard/newsСard";
import { v4 as uuidv4 } from 'uuid';

interface BlockProps {
    filteredCards: Array<CardType>,
    name: string
}

export const Block = ({name , filteredCards}: BlockProps) => {

    return (
        <>
            <Link style={{color: '#000' , display: 'block', width: 'fit-content'}} to={`/category/${name}`}>
                <TitleNewsBlockText>{name}</TitleNewsBlockText>
            </Link>
            <BlockWrapper>
                {filteredCards.map((item, index) => <NewsCard type={'smallCard'} key={uuidv4()} dataCard={item} />)}
            </BlockWrapper>
        </>
    )
}