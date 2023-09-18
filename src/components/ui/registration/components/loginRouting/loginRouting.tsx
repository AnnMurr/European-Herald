import { Span, StyledLink } from "./styledLoginRouting";

export const LoginRouting = () => {
  return (
    <div>
      <Span>
        Already have an account?{" "}
        <StyledLink className="registration__routing-link" to={"/login"}>
          Sign in
        </StyledLink>
      </Span>
    </div>
  )
}
