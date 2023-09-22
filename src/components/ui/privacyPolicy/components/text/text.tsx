import { Paragraph } from "./styledText";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { useContext } from "react";

interface TextProps {
    text: string | React.ReactElement
}

export const Text: React.FC<TextProps> = ({ text }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Paragraph themestyles={themeContext.themeStyles}>
            {text}
        </Paragraph>
    )
}