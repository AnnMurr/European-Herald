import { useContext, useEffect } from "react";
import { Container, Wrapper } from "./styledRegistration";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { useLocation } from "react-router-dom";
import { Form, LoginRouting, Title } from ".";

export const Registration = () => {
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
                <LoginRouting />
            </Wrapper>
        </Container>
    )
}