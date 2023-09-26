import { useContext } from "react";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { Container } from "./styledContent";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";
import { MaterialUISwitch } from "../swich/swich";
import { Text } from "./components/text/text";
import { ContentProps } from "../../../../types";

export const Content: React.FC<ContentProps> = ({ switchRef }) => {
    const themeContext: ThemeContextType = useContext(ThemeContext)
    const isChecked = themeContext.currentTheme === 'dark'

    return (
        <Container>
            <Text text={'Light'} themeStyles={themeContext.themeStyles} />
            <MaterialUISwitch
                ref={switchRef}
                checked={isChecked}
                onChange={themeContext.changeTheme}
                theme={themeContext}
            />
            <Text text={'Dark'} themeStyles={themeContext.themeStyles} />
        </Container>
    )
}