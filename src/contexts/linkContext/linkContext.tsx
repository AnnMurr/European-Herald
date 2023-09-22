import React, { useState } from "react";

export const LinkContext = React.createContext({});

interface LinkContextProviderProps {
  children: React.ReactNode;
}

export interface LinkContextType {
  hideNavigation?: boolean;
  checkLink?: (value: string | null) => void;
}

export const LinkContextProvider: React.FC<LinkContextProviderProps> = ({
  children,
}) => {
  const [hideNavigation, setHideNavigation] = useState<boolean>(false)

  const checkLink = (url: string | null) => {
    url === "/registration" || url === "/login" || url === "/passwordrecovery"
      ? setHideNavigation(true)
      : setHideNavigation(false);
  };

  return (
    <LinkContext.Provider
      value={{
        hideNavigation: hideNavigation,
        checkLink: checkLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
