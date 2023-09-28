import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Span } from "./styledUserName";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface UserNameProps {
    name: string | undefined
}

export const UserName: React.FC<UserNameProps> = ({name}) => {
    return (
        <Container>
            <FontAwesomeIcon icon={faUser} />
            <Span>{name}</Span>
        </Container>
    )
}