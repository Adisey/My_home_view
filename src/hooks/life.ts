import { useState } from "react";

type IUseIsLife = {
  isLife: boolean;
  setLife(value: boolean): void;
};

export const useIsLife = (): IUseIsLife => {
  const [isLife, setIsLife] = useState<boolean>(false);
  const setLife = (value: boolean) => {
    setIsLife(value);
  };
  return { isLife, setLife };
};
