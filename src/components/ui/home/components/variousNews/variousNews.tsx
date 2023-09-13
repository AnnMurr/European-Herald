import { CardType } from "../../../../../redux/reducers/types";
import { useAppSelector } from "../../../../../redux/store/store";
import { Spinner } from "../../../../reusable/spinner/spinner";
import { NewsCard } from "../../../../shared/newsCard/newsСard";
import { Container } from "./styledVariousNews";
import { v4 as uuidv4 } from 'uuid';

interface VariousNewsProps {
    cards: Array<CardType>
}

export const VariousNews: React.FC<VariousNewsProps> = ({ cards }) => {
    const isLoading = useAppSelector((state) => state.loading)

    return (
        <Container>
            {isLoading ?
                <Spinner /> :
                cards.map((item, index) => <NewsCard type={index < 2 ? 'BigCard' : 'smallCard'} key={uuidv4()} dataCard={item} />)}
        </Container>
    )
}