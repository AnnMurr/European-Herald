import { TextProps } from "../../../../../../types";
import { Span } from "./styledText";

export const Text: React.FC<TextProps> = ({text, themeStyles}) => {
    return (
        <div>
            <Span themestyles={themeStyles}>{text}</Span>
        </div>
    )
}