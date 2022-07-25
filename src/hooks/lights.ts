import { useObservableState } from "observable-hooks";
import { ILight } from "../interfaces";
import { useStore } from "../store";

export const useLights = (): ILight[] => {
  const { lights$ } = useStore();
  return useObservableState<ILight[]>(lights$, []);
};

export const useIsLight = (id?: ILight): boolean => {
  return !!id && useLights().includes(id);
};
