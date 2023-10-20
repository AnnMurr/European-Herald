import { useState } from "react";

import { ConfirmBtn, EditInput } from ".";
import { useAppSelector } from "../../../redux/store/store";
import { EditModalProps } from "./types";
import { CloseBtn } from "../closeBtn/closeBtn";

import { Container } from "./styledEditModalPassword";

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
            <CloseBtn closeModal={closeModal} currentColor={'#000'} />
            <EditInput error={error} setInputValue={setInputValue} />
            <ConfirmBtn passwordСheck={passwordСheck} />
        </Container>
    )
}