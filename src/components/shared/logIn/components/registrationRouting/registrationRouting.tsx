import { Link } from "react-router-dom";
import { Span } from "./styledRegistrationRouting";

export const RegistrationRouting = () => {
  return (
    <div>
      <Span>
        Not registered yet?{" "}
        <Link className="login__routing-link" to={"/registration"}>
          Sign Up
        </Link>
      </Span>
    </div>
  );
};
