import { Span, StyledLink } from "./styledRegistrationRouting";

export const RegistrationRouting = () => {
  return (
    <div>
      <Span>
        Not registered yet?{" "}
        <StyledLink to={"/registration"}>
          Sign Up
        </StyledLink>
      </Span>
    </div>
  );
};
