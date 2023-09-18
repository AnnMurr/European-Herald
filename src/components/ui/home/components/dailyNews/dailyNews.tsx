import { CardType } from "../../../../../redux/reducers/types";
import { useAppSelector } from "../../../../../redux/store/store";
import { Spinner } from "../../../../reusable/spinner/spinner";
import { Title } from "./components/title/title";
import { Cards } from "./components/dailyNewsCards/dailyNewsCards";
import { Container, Block } from "./styledDailyNews";

interface DailyNewsProps {
    cards: Array<CardType>
}

export const DailyNews: React.FC<DailyNewsProps> = ({ cards }) => {
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