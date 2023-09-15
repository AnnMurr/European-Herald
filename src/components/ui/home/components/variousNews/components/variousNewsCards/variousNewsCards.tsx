import { CardType } from "../../../../../../../redux/reducers/types";
import { NewsCard } from "../../../../../../shared/newsCard/newsСard";
import { v4 as uuidv4 } from 'uuid';

interface VariousNewsCardsProps {
    cards: Array<CardType>
}

export const Cards = ({cards}: VariousNewsCardsProps) => {
    return (
        <>
            {cards.map((item, index) => <NewsCard type={index < 2 ? 'BigCard' : 'smallCard'} key={uuidv4()} dataCard={item} />)}
        </>
    )
}