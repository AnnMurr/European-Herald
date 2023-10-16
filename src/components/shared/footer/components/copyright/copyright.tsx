import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Span } from "./styledCopyright";

export const Copyright = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <>
            <Span themestyles={themeContext.themeStyles}>© 2023 European Herald. All Rights Reserved.</Span>
        </>
    )
}