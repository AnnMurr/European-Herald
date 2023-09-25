import { Wrapper, BackgroundImage, Container, Information, StyledLink } from "./styledNewsCard";
import { NewsCardProps } from "./types";
import { Title } from "./components/title/title";
import { CardDate } from "./components/date/date";
import { useContext } from "react";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

export const NewsCard: React.FC<NewsCardProps> = ({ cardClass, type, dataCard }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container theme={themeContext.currentTheme} cardtype={type}>
            <StyledLink to={`/article/${dataCard.uri}`}>
                <Wrapper cardtype={type}>
                    <BackgroundImage datacard={dataCard} />
                </Wrapper>
                <Information cardclass={cardClass}>
                    <Title cardClass={cardClass} type={type} dataCard={dataCard} />
                    <CardDate cardClass={cardClass} type={type} dataCard={dataCard} />
                </Information>
            </StyledLink>
        </Container>
    )
}