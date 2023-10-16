import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { Form, LoginRouting, Title } from ".";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

import { Container, Wrapper } from "./styledRegistration";

export const Registration = () => {
    const { checkLink }: LinkContextType = useContext(LinkContext)
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const location = useLocation()

    useEffect(() => {
        checkLink && checkLink(location.pathname)

        return () => {
            checkLink && checkLink(null)
        }
    })

    return (
        <Container>
            <Wrapper themestyles={themeContext.themeStyles}>
                <Title />
                <Form />
                <LoginRouting />
            </Wrapper>
        </Container>
    )
}