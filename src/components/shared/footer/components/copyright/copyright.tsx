import { useContext } from "react";
import { Span } from "./styledCopyright";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const Copyright = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <>
            <Span themestyles={themeContext.themeStyles}>© 2023 European Herald. All Rights Reserved.</Span>
        </>
    )
}