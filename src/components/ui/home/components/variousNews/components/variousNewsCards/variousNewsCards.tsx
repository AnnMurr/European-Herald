import { CardType } from "../../../../../../../redux/reducers/types";
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";

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