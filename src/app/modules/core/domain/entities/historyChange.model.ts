import { HistoryType } from "../enums/historyType.model";
import { User } from "./user.model";

export interface HistoryChange {
  uid: string;
  type: HistoryType;
  owner: string;
}
