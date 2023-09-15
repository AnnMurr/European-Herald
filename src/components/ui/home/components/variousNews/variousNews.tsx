import { CardType } from "../../../../../redux/reducers/types";
import { useAppSelector } from "../../../../../redux/store/store";
import { Spinner } from "../../../../reusable/spinner/spinner";
import { Title } from "./components/title/title";
import { Cards } from "./components/variousNewsCards/variousNewsCards";
import { Container, Block } from "./styledVariousNews";

interface VariousNewsProps {
    cards: Array<CardType>
}

export const VariousNews: React.FC<VariousNewsProps> = ({ cards }) => {
    const isLoading = useAppSelector((state) => state.loading)

    return (
        <Container>
            {isLoading ?
                <Spinner /> :
                <div>
                    <Title />
                    <Block>
                        <Cards cards={cards} />
                    </Block>
                </div>}
        </Container>
    )
}