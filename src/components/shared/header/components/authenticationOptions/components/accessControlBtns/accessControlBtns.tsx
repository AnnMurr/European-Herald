import { Link } from "react-router-dom";
import { Button } from "../../../../../../reusable/button/styledButton";
import { BtnWrapper, Underline } from "./styledButtons";
import { AccessControlBtnsProps } from "../../../../types";
import './style.css';

export const AccessControlBtns = ({ closeModal }: AccessControlBtnsProps) => {
    return (
        <BtnWrapper>
            <Link className="accessControl__link" to={'./login'}>
                <Button style={{border: 'none', margin: '0', width: '100%'}} onClick={() => closeModal(false)}>Sign in</Button>
                <Underline className="underline" />
            </Link>
            <Link className="accessControl__link" to={'./registration'}>
                <Button style={{border: 'none', margin: '0', width: '100%'}} onClick={() => closeModal(false)}>Sign up</Button>
                <Underline className="underline" />
            </Link>
        </BtnWrapper>
    )
}