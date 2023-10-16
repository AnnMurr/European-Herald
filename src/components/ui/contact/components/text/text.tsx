import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Paragraph } from "./styledText";

interface TextProps {
    text: string
}

export const Text: React.FC<TextProps> = ({ text }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Paragraph themestyles={themeContext.themeStyles} dangerouslySetInnerHTML={{ __html: text }} />
    )
}