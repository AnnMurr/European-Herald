import { Link } from "react-router-dom";
import { Button } from "../../../../../../reusable/button/styledButton";
import { BtnWrapper, Underline } from "./styledButtons";
import { AccessControlBtnsProps } from "../../../../types";

export const AccessControlBtns = ({ closeModal }: AccessControlBtnsProps) => {
    return (
        <BtnWrapper>
            <Link to={'./login'}>
                <Button type="button" className="btn" onClick={() => closeModal(false)}>Sign in
                    <Underline className="underline" />
                </Button>
            </Link>
            <Link to={'./registration'}>
                <Button type="button" className="btn" onClick={() => closeModal(false)}>Sign up
                    <Underline className="underline" />
                </Button>
            </Link>
        </BtnWrapper>
    )
}