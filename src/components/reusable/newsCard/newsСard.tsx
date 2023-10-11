import { Wrapper, BackgroundImage, Container, Information, StyledLink } from "./styledNewsCard";
import { NewsCardProps } from "./types";
import { Title } from "./components/title/title";
import { CardDate } from "./components/date/date";
import { useContext } from "react";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { motion } from "framer-motion";

export const NewsCard: React.FC<NewsCardProps> = ({ cardClass, type, dataCard }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    const contentAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },

        })
    }

    return (
        <Container theme={themeContext.currentTheme} cardtype={type}>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }} >
                <motion.div variants={contentAnimation}>
                    <StyledLink to={`/article/${dataCard.uri}`}>
                        <Wrapper cardtype={type}>
                            <BackgroundImage datacard={dataCard} />
                        </Wrapper>
                        <Information cardclass={cardClass}>
                            <Title cardClass={cardClass} type={type} dataCard={dataCard} />
                            <CardDate cardClass={cardClass} type={type} dataCard={dataCard} />
                        </Information>
                    </StyledLink>
                </motion.div>
            </motion.div >
        </Container>
    )
}