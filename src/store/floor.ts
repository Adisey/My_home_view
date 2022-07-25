import { BehaviorSubject } from "rxjs";
import { IHouseFloorSettings } from "../interfaces";
import { myHomeFloors } from "../settings/myHouse";

export const floors$ = new BehaviorSubject<IHouseFloorSettings[]>(myHomeFloors);
