import { useContext } from "react";
import { Form } from "./components/personalData/personalData";
import { Title } from "./components/title/title";
import { Container, Inner, Wrapper } from "./styledUserSettings";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

export const UserSettings = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Container>
            <Wrapper>
                <Inner themestyles={themeContext.themeStyles}>
                    <Title />
                    <Form />
                </Inner>
            </Wrapper>
        </Container>
    )
}