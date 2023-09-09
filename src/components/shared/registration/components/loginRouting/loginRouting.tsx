import { Link } from "react-router-dom";
import { Span } from "./styledLoginRouting";
import './style.css';

export const LoginRouting = () => {
  return (
    <div>
      <Span>
        Already have an account?{" "}
        <Link className="login__routing-link" to={"/login"}>
          Sign in
        </Link>
      </Span>
    </div>
  );
};
