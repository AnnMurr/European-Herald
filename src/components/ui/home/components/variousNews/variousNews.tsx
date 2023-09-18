import { CardType } from "../../../../../redux/reducers/types";
import { NewsCard } from "../../../../reusable/newsCard/newsСard";
import { Block, TitleText } from "./styledVariousNews";
import { v4 as uuidv4 } from "uuid";

interface VariousNewsProps {
    cards: Array<CardType>
}

export const VariousNews: React.FC<VariousNewsProps> = ({ cards }) => {


    return (
        <>
            <div>
                <TitleText>Various News</TitleText>
            </div>
            <Block>
                {cards.map((item) => <NewsCard  cardClass={'card'} type={'smallCard'} key={uuidv4()} dataCard={item} />)}
            </Block>
        </>
    )
}