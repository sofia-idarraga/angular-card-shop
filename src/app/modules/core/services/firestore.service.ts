import { Card } from "./../domain/entities/card.model";
import { Injectable } from "@angular/core";
import {
  addDoc,
  collectionData,
  Firestore,
  orderBy,
  where,
} from "@angular/fire/firestore";
import { collection, query } from "@firebase/firestore";
import { Observable } from "rxjs";
import { User as UserModel } from "../domain/entities/user.model";
import { User as UserAuth } from "@angular/fire/auth";
import { Auth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  currentAppUser?: UserModel;

  getCards(): Observable<Card[]> {
    const userRef = collection(this.firestore, "rickAndMorty");
    const q = query(userRef, orderBy("name"));
    return collectionData(q, { idField: "uid" }) as Observable<Card[]>;
  }

  getSoldCards(): Observable<Card[]> {
    const userRef = collection(this.firestore, "rickAndMorty");
    const q = query(
      userRef,
      where("activeForSale", "==", false),
      orderBy("name")
    );
    return collectionData(q, { idField: "uid" }) as Observable<Card[]>;
  }

  async findOrCreateUser(user: UserAuth) {
    const userRef = collection(this.firestore, "users");
    const q = query(userRef, where("email", "==", user.email));
    collectionData(q, { idField: "uid" }).subscribe(async (doc) => {
      if (doc[0] != undefined) {
        this.currentAppUser = doc[0];
        console.log(doc[0]);
        return doc;
      } else {
        return await this.executeCreateUser(user);
      }
    });
  }

  getAppUser(): Observable<UserModel[]> {
    const userRef = collection(this.firestore, "users");
    const q = query(
      userRef,
      where("email", "==", this.auth.currentUser?.email)
    );
    return collectionData(q, { idField: "uid" });
  }

  async executeCreateUser(user: UserAuth) {
    const userRef = collection(this.firestore, "users");
    const newUser: UserModel = {
      email: user.email!!,
      username: user.displayName!!,
      avatar: user.photoURL!!,
      balance: 0,
      deck: [],
      recharges: [],
    };
    await addDoc(userRef, newUser);
    console.log("created");
    this.currentAppUser = newUser;
    return newUser;
  }
}
