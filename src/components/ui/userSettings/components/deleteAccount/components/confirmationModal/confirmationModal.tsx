import { useState } from "react";

import { DeleteBtn, Input } from ".";
import { ConfirmationModalProps } from "./types";
import { CloseBtn } from "../../../../../../reusable/closeBtn/closeBtn";

import { Container } from "./styledConfirmationModal";

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ closeModal }) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    return (
        <Container>
            <CloseBtn closeModal={closeModal} currentColor={'#000'} />
            <Input error={error} setInputValue={setInputValue} />
            <DeleteBtn setError={setError} closeModal={closeModal} inputValue={inputValue} />
        </Container>
    )
}