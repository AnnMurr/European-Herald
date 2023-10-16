import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Span, StyledLink } from "./styledRegistrationRouting";

export const RegistrationRouting = () => {
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  
  return (
    <div>
      <Span themestyles={themeContext.themeStyles}>
        Not registered yet?{" "}
        <StyledLink themestyles={themeContext.themeStyles} to={"/registration"}>
          Sign Up
        </StyledLink>
      </Span>
    </div>
  );
};
