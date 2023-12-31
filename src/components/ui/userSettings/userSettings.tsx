import { useContext } from "react";

import { Form } from "./components/personalData/personalData";
import { Title } from "./components/title/title";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";

import { Container, Inner, Wrapper } from "./styledUserSettings";
import { DeleteAccountBtn } from "./components/deleteAccount/deleteAccount";

export const UserSettings = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    
    return (
        <Container>
            <Wrapper>
                <Inner themestyles={themeContext.themeStyles}>
                    <Title />
                    <Form />
                    <DeleteAccountBtn />
                </Inner>
            </Wrapper>
        </Container>
    )
}