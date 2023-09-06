import { Form } from "./components/form/form";
import { Title } from "./components/title/title";
import { Container, Wrapper } from "./styledLogIn";
import { RegistrationRouting } from './components/registrationRouting/registrationRouting';

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title />
                <Form />

                <RegistrationRouting/>
            </Wrapper>
        </Container >
    )
}