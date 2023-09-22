import { Theme } from "../../../../../../../../../contexts/themeContext/types";
import { Span } from "./styledText";

interface TextProps {
    text: string,
    themeStyles: Theme,
}

export const Text: React.FC<TextProps> = ({text, themeStyles}) => {
    return (
        <div>
            <Span themestyles={themeStyles}>{text}</Span>
        </div>
    )
}