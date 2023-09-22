import { useContext } from "react";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { DataCardProps } from "../../types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { Paragraph } from "./styleText";

export const Text: React.FC<DataCardProps> = ({dataCard}) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <div>
            <Paragraph themestyles={themeContext.themeStyles}>
                {dataCard.body}
            </Paragraph>
        </div>
    )
}