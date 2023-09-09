import { Link } from "react-router-dom";
import { Container, Span } from "./styledLoginRouting";
import './style.css'

export const LoginRouting = () => {
  return (
    <Container>
      <Span>
        return to{" "}
        <Link className="login__routing-link" to={"/login"}>
          Sign in
        </Link>
        {" "}
        form
      </Span>
    </Container>
  );
};
