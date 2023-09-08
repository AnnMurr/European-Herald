import { Container, SubTitle, Title, Wrapper } from "./styledErrorPage";

export const ErrorPage = () => {
    return (
        <Container>
            <Wrapper>
                <Title>404</Title>
                <SubTitle>Page Not Found</SubTitle>
                <p>We can’t find the page you're looking for. If you typed the URL into your browser, check that you entered it correctly.</p>
            </Wrapper>
        </Container>
    )
}