import { useContext } from "react";
import { Container, Span, StyledLink } from "./styledForgotRouting";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

export const ForgotRouting = () => {
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  
  return (
    <Container>
      <Span themestyles={themeContext.themeStyles}>
        Forgot your{" "}
        <StyledLink themestyles={themeContext.themeStyles} to={"/passwordrecovery"}>
          password
        </StyledLink>
        ?
      </Span>
    </Container>
  );
};
