import { useState } from "react";

import { CrossBtn, EditInputs, SaveBtn } from ".";
import { NewPasswordModalProps } from "./types";

import { Container } from "./styledNewPasswordModal";

export const NewPasswordModal: React.FC<NewPasswordModalProps> = ({ closeModal }) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [isCorrectInputValue, setIsCorrectInputValue] = useState<boolean>(false)

    return (
        <Container>
            <CrossBtn closeModal={closeModal} />
            <EditInputs setInputValue={setInputValue} setIsCorrectInputValue={setIsCorrectInputValue} />
            <SaveBtn inputValue={inputValue} closeModal={closeModal} isCorrectInputValue={isCorrectInputValue} />
        </Container>
    )
}