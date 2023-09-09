import { Link } from "react-router-dom";
import { Container, Span } from "./styledForgotRouting";
import '../../style.css';

export const ForgotRouting = () => {
  return (
    <Container>
      <Span>
        Forgot your{" "}
        <Link className="login__routing-link" to={"/passwordrecovery"}>
          password
        </Link>
        ?
      </Span>
    </Container>
  );
};
