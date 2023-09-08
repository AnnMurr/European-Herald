import { Link } from "react-router-dom";

export const LoginRouting = () => {
    return (
        <div>
            <span>
                Already have an account? <Link to={'/login'}>Sign in</Link>
            </span>
        </div>
    )
}