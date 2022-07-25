import React, { createContext, FC, ReactNode, useContext } from "react";
import { lights$ } from "./light";
import { floors$ } from "./floor";

export { lights$, floors$ };

const StoreContext = createContext({
  lights$,
  floors$,
});

export const useStore = () => useContext(StoreContext);

type Props = {
  children: ReactNode;
};

export const StoreProvider: FC<Props> = ({ children }: Props) => (
  <StoreContext.Provider
    value={{
      lights$,
      floors$,
    }}
  >
    {children}
  </StoreContext.Provider>
);
