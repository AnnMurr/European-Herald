import { useContext } from "react";
import { Container } from "./styledBody";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";
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