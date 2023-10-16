import { useContext } from "react";

import { useAppSelector } from "../../../../../redux/store/store";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { motion } from "framer-motion";
import { DateInformation, DetailsBlock, TemperatureBlock, Location } from ".";

import { Container, StyledLink, Wrapper } from "./styledWeather";

export const Weather = () => {
    const weatherDataFromRedux = useAppSelector(state => state.weather.weatherData)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    const contentAnimation = {
        hidden: {
            y: 100,
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
        <>
            {weatherDataFromRedux ?
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} >
                    <motion.div variants={contentAnimation}>
                        <Container themestyles={themeContext.themeStyles}>
                            <Wrapper>
                                <TemperatureBlock weatherData={weatherDataFromRedux} />
                                <StyledLink themestyles={themeContext.themeStyles} to={'/weather'}>
                                    <DetailsBlock weatherData={weatherDataFromRedux} />
                                    <Location weatherData={weatherDataFromRedux} />
                                    <DateInformation weatherData={weatherDataFromRedux} />
                                </StyledLink>
                            </Wrapper>
                        </Container>
                    </motion.div>
                </motion.div>
                : null}
        </>
    )
}