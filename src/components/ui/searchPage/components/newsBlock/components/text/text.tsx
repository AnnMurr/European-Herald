import { useContext } from "react";

import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { TextProps } from "../../../../types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

import { Span, Container } from "./styledText";

export const Text: React.FC<TextProps> = ({ text }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)

    return (
        <Container>
            <Span themestyles={themeContext.themeStyles}>Sorry, there are no results for {text}</Span>
        </Container>
    )
}