import React, { useState } from "react";

export const LinkContext = React.createContext({});

interface LinkContextProviderProps {
  children: React.ReactNode;
}

export interface LinkContextType {
  hideContent?: boolean;
  checkLink?: (value: string | null) => void;
}

export const LinkContextProvider: React.FC<LinkContextProviderProps> = ({
  children,
}) => {
  const [hideContent, sethideContent] = useState<boolean>(false)

  const checkLink = (url: string | null) => {
    url === "/registration" || url === "/login" || url === "/passwordrecovery"
      ? sethideContent(true)
      : sethideContent(false);
  };

  return (
    <LinkContext.Provider
      value={{
        hideContent: hideContent,
        checkLink: checkLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}
