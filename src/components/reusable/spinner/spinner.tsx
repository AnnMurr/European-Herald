import { useContext } from "react";

import { ThreeDots } from "react-loader-spinner";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

import { Container } from "./styledSpinner";

export const Spinner = () => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    
    return (
        <Container>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color={themeContext.themeStyles.color}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </Container>
    )
}