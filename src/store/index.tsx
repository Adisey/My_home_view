import React, { createContext, FC, ReactNode, useContext } from "react";
import { lights$ } from "./light";

export * from "./light";

const StoreContext = createContext({
  lights$,
});

export const useStore = () => useContext(StoreContext);

type Props = {
  children: ReactNode;
};

export const StoreProvider: FC<Props> = ({ children }: Props) => (
  <StoreContext.Provider
    value={{
      lights$,
    }}
  >
    {children}
  </StoreContext.Provider>
);
