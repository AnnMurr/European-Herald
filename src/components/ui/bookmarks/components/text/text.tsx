import { useContext } from "react";
import { Container, Span } from "./styledText";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Text = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Container>
            <Span themestyles={themeContext.themeStyles}>In your list, you don't have any bookmarks yet.</Span>
        </Container>
    )
}