import { Container } from "./styledEditModal";
import { EditInput } from "./components/editInput/editInput";
import { CrossBtn } from "./components/crossBtn/crossBtn";
import { SaveBtn } from "./components/saveBtn/saveBtn";
import { useState } from "react";
import { EditModalProps } from "./types";

export const EditModal: React.FC<EditModalProps> = ({ closeModal, data, name }) => {
    const [inputValue, setInputValue] = useState<string>(data!)
    
    return (
        <Container>
            <CrossBtn closeModal={closeModal} />
            <EditInput name={name} inputValue={inputValue} setInputValue={setInputValue} />
            <SaveBtn closeModal={closeModal} name={name} inputValue={inputValue} />
        </Container>
    )
}