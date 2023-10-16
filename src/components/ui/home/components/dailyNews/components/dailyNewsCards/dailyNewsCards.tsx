import { CardType } from "../../../../../../../redux/reducers/cardsReducer/types";
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";

interface DailyNewsCardsProps {
    cards: Array<CardType>
}

export const Cards: React.FC<DailyNewsCardsProps> = ({ cards }) => {
    return (
        <>
            {cards.map((item, index) => <NewsCard type={index < 2 ? 'BigCard' : 'smallCard'} key={uuidv4()} dataCard={item} />)}
        </>
    )
}