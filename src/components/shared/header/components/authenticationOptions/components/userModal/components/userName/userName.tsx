import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Span } from "./styledUserName";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ThemeContextType } from "../../../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../../../contexts/themeContext/themeContext";

interface UserNameProps {
    name: string | undefined
}

export const UserName: React.FC<UserNameProps> = ({name}) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container>
            <FontAwesomeIcon color={themeContext.themeStyles.color} icon={faUser} />
            <Span themestyles={themeContext.themeStyles}>{name}</Span>
        </Container>
    )
}