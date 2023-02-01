import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/modules/core/domain/entities/card.model";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styles: [],
})
export class StoreComponent implements OnInit {
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    /*
    this.firestoreService.getSoldCards().subscribe((c) => {
      this.cards = c;
      console.log(c);
    });
    */
    //this.cards = this.cards.filter((c) => c.activeForSale != false);
  }

  cards: Card[] = [
    {
      uid: "11111",
      name: "Card1",
      description: "desc1",
      price: 1111,
      imageUrl: "https://picsum.photos/320/240?random",
      activeForSale: true,
      history: [],
    },
    {
      uid: "11111",
      name: "Card1",
      description: "desc1",
      price: 1111,
      imageUrl: "https://picsum.photos/320/240?random",
      activeForSale: false,
      history: [],
    },
  ];
}
