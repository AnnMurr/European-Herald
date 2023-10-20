import { useState } from "react";

import { EditModalProps } from "./types";
import { CrossBtn, EditInput, SaveBtn } from ".";

import { Container } from "./styledEditModal";

export const EditModal: React.FC<EditModalProps> = ({ closeModal, data, name }) => {
    const [inputValue, setInputValue] = useState<string>(data!)
    const [error, setError] = useState(false)
     
    return (
        <Container>
            <CrossBtn closeModal={closeModal} />
            <EditInput error={error} name={name} inputValue={inputValue} setInputValue={setInputValue} />
            <SaveBtn setError={setError} closeModal={closeModal} name={name} inputValue={inputValue} />
        </Container>
    )
}