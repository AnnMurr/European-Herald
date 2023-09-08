import { Link } from "react-router-dom";

export const RegistrationRouting = () => {
    return (
        <div>
            <span>
                Not registered yet? <Link to={'/registration'}>Sign Up</Link>
            </span>
        </div>
    )
}