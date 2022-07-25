import { BehaviorSubject } from "rxjs";
import { IHouseFloorSettings } from "../interfaces";

export const floors$ = new BehaviorSubject<IHouseFloorSettings[]>([]);
