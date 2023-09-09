import { Link } from "react-router-dom";
import { Span } from "./styledRegistrationRouting";
import '../../style.css';

export const RegistrationRouting = () => {
  return (
    <div>
      <Span>
        Not registered yet?{" "}
        <Link className="registration__routing-link" to={"/registration"}>
          Sign Up
        </Link>
      </Span>
    </div>
  );
};
