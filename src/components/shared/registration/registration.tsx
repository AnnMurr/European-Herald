import { Form } from "./components/form/form";
import { Title } from "./components/title/title";
import { Container, Wrapper } from "./styledRegistration";

export const Registration = () => {
    return (
        <Container>
            <Wrapper>
                <Title />
                <Form />
            </Wrapper>
        </Container>
    )
}