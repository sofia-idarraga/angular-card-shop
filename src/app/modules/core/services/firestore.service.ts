import { Card } from "./../domain/entities/card.model";
import { Injectable } from "@angular/core";
import { collectionData, Firestore, orderBy } from "@angular/fire/firestore";
import { collection, query } from "@firebase/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCards(): Observable<Card[]> {
    const userRef = collection(this.firestore, "rickAndMorty");
    const q = query(userRef, orderBy("name"));
    return collectionData(q, { idField: "uid" }) as Observable<Card[]>;
  }
}
