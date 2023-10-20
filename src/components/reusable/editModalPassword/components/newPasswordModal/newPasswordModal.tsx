import { useState } from "react";

import { EditInputs, SaveBtn } from ".";
import { NewPasswordModalProps } from "./types";
import { CloseBtn } from "../../../closeBtn/closeBtn";

import { Container } from "./styledNewPasswordModal";

export const NewPasswordModal: React.FC<NewPasswordModalProps> = ({ closeModal }) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [isCorrectInputValue, setIsCorrectInputValue] = useState<boolean>(false)

    return (
        <Container>
            <CloseBtn closeModal={closeModal} currentColor={'#000'} />
            <EditInputs setInputValue={setInputValue} setIsCorrectInputValue={setIsCorrectInputValue} />
            <SaveBtn inputValue={inputValue} closeModal={closeModal} isCorrectInputValue={isCorrectInputValue} />
        </Container>
    )
}