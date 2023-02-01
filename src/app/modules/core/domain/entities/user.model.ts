import { Card } from "./card.model";
import { Recharge } from "./recharge.model";

export interface User {
  uid?: string;
  email?: string;
  username?: string;
  avatar?: string;
  balance?: number;
  deck?: Card[];
  recharges?: Recharge[];
}
