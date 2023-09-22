import { useContext } from "react";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { Container } from "./styledContent";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";
import { MaterialUISwitch } from "../swich/swich";
import { Text } from "./components/text/text";

export const Content = () => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const isChecked = themeContext.currentTheme === 'dark'

    return (
        <Container>
            <Text text={'Light'} themeStyles={themeContext.themeStyles} />
            <MaterialUISwitch
                checked={isChecked}
                onChange={themeContext.changeTheme}
                theme={themeContext}
            />
            <Text text={'Dark'} themeStyles={themeContext.themeStyles} />
        </Container>
    )
}