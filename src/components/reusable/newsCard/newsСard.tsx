import { Link } from "react-router-dom";
import { Wrapper, BackgroundImage, Container, Information } from "./styledNewsCard";
import { NewsCardProps } from "./types";
import { Title } from "./components/title/title";
import { CardDate } from "./components/date/date";

export const NewsCard: React.FC<NewsCardProps> = ({ cardClass, type, dataCard }) => {
    return (
        <Container cardtype={type}>
            <Link style={{ width: '100%', position: 'relative' }} to={`/article/${dataCard.uri}`}>
                <Wrapper cardtype={type}>
                    <BackgroundImage datacard={dataCard} />
                </Wrapper>
                <Information cardclass={cardClass}>
                    <Title cardClass={cardClass} type={type} dataCard={dataCard} />
                    <CardDate cardClass={cardClass} type={type} dataCard={dataCard} />
                </Information>
            </Link>
        </Container>
    )
}