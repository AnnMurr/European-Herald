import { useContext, useEffect } from "react";
import { Container, Wrapper } from "./styledRegistration";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { useLocation } from "react-router-dom";
import { Form, LoginRouting, Title } from ".";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

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