import { BehaviorSubject } from "rxjs";
import { ILight } from "../interfaces";

export const lights$ = new BehaviorSubject<ILight[]>([]);
