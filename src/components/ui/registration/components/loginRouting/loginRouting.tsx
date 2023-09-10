import { Link } from "react-router-dom";
import { Span } from "./styledLoginRouting";

export const LoginRouting = () => {
  return (
    <div>
      <Span>
        Already have an account?{" "}
        <Link className="registration__routing-link" to={"/login"}>
          Sign in
        </Link>
      </Span>
    </div>
  );
};
