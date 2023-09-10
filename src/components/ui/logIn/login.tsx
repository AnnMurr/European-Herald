import { useContext, useEffect } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { useLocation } from "react-router-dom";
import { Form, RegistrationRouting, Title } from ".";
import { Container, Wrapper } from "./styledLogIn";

export const Login = () => {
    const { checkLink }: LinkContextType = useContext(LinkContext)
    const location = useLocation()

    useEffect(() => {
        checkLink && checkLink(location.pathname)

        return () => {
            checkLink && checkLink(null)
        }
    })
    return (
        <Container>
            <Wrapper>
                <Title />
                <Form />
                <RegistrationRouting />
            </Wrapper>
        </Container >
    )
}