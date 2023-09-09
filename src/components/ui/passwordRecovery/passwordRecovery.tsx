import { useContext, useEffect } from "react"
import { Form } from "./components/form/form"
import { SubTitle } from "./components/subTitle/subTitle"
import { Title } from "./components/title/title"
import { Container, Wrapper } from "./styledPasswordRecovery"
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext"
import { useLocation } from "react-router-dom"

export const PasswordRecovery = () => {
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
               <SubTitle />
               <Form />
            </Wrapper>
        </Container >
    )
}