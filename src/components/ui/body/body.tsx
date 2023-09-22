import { useContext } from "react";
import { Container } from "./styledBody";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";

export const Body = ({ children }: any) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container themestyles={themeContext.themeStyles}>
            {children}
        </Container>
    )
}
