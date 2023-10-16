import { useContext } from "react";

import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";

import { Span, StyledLink } from "./styledLoginRouting";

export const LoginRouting = () => {
  const themeContext = useContext<ThemeContextType>(ThemeContext)
  
  return (
    <div>
      <Span themestyles={themeContext.themeStyles}>
        Already have an account?{" "}
        <StyledLink themestyles={themeContext.themeStyles} to={"/login"}>
          Sign in
        </StyledLink>
      </Span>
    </div>
  )
}
