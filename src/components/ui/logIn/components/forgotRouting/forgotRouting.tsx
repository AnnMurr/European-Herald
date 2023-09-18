import { Container, Span, StyledLink } from "./styledForgotRouting";

export const ForgotRouting = () => {
  return (
    <Container>
      <Span>
        Forgot your{" "}
        <StyledLink to={"/passwordrecovery"}>
          password
        </StyledLink>
        ?
      </Span>
    </Container>
  );
};
