import { useState } from "react";

import { Container } from "./styledEditModalPassword";
import { ConfirmBtn, CrossBtn, EditInput } from ".";
import { useAppSelector } from "../../../redux/store/store";
import { EditModalProps } from "./types";

export const EditModalPassword: React.FC<EditModalProps> = ({ setIsNewPasswordModal, closeModal, data }) => {
    const [inputValue, setInputValue] = useState<string>(data!)
    const [error, setError] = useState(false)
    const userDataPasswordFromRedux = useAppSelector(state => state.user.userData?.password)
     
    const passwordСheck = () => {
        if (inputValue === userDataPasswordFromRedux) {
            closeModal(false)
            setError(false)
            setIsNewPasswordModal(true)
        } else {
            setError(true)
        }
    }
    
    return (
        <Container>
            <CrossBtn closeModal={closeModal} />
            <EditInput error={error} setInputValue={setInputValue} />
            <ConfirmBtn passwordСheck={passwordСheck} />
        </Container>
    )
}