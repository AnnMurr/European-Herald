import { useContext, useEffect } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { useLocation } from "react-router-dom";
import { Form, RegistrationRouting, Title } from ".";
import { Container, Wrapper } from "./styledLogIn";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

export const Login = () => {
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
                <RegistrationRouting />
            </Wrapper>
        </Container >
    )
}