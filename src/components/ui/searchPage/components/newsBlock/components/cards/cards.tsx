import { NewsCard } from "../../../../../../reusable/newsCard/newsСard";
import { v4 as uuidv4 } from "uuid";
import { CardsProps } from "../../../../types";

export const Cards: React.FC<CardsProps> = ({ foundСards }) => {
    return (
        <>
            {foundСards.map((item) => <NewsCard cardClass={'card'} type={'BigCard'} key={uuidv4()} dataCard={item} />)}
        </>
    )
}