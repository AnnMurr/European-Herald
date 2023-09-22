import { ThreeDots } from "react-loader-spinner";
import { Container } from "./styledSpinner";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

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