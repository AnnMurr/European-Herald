import { useContext } from "react";

import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";

import { Container } from "./styledBody";
interface BodyProps {
    children: React.ReactNode
}

export const Body: React.FC<BodyProps> = ({ children }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container themestyles={themeContext.themeStyles}>
            {children}
        </Container>
    )
}