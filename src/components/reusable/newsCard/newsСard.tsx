import { useContext } from "react";

import { NewsCardProps } from "./types";
import { Title } from "./components/title/title";
import { CardDate } from "./components/date/date";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { motion } from "framer-motion";

import { Wrapper, BackgroundImage, Container, Information, StyledLink } from "./styledNewsCard";

export const NewsCard: React.FC<NewsCardProps> = ({ cardClass, type, dataCard }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    const contentAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: ({
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },

        })
    }

    return (
        <Container theme={themeContext.currentTheme} cardtype={type} cardclass={cardClass}>
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