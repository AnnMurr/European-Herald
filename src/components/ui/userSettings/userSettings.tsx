import { Form } from "./components/personalData/personalData";
import { Title } from "./components/title/title";
import { Container, Wrapper } from "./styledUserSettings";

export const UserSettings = () => {
    return (
        <Container>
            <Wrapper>
                <Title />
                <Form />
            </Wrapper>
        </Container>
    )
}