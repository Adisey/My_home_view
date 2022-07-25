import { IHouseFloorSettings } from "../interfaces";
import { useStore } from "../store";
import { useObservableState } from "observable-hooks";

export const useFloors = (): IHouseFloorSettings[] => {
  const { floors$ } = useStore();
  return useObservableState<IHouseFloorSettings[]>(floors$, []);
};
