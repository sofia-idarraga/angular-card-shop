import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/modules/core/domain/entities/card.model";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";

@Component({
  selector: "app-store",
  template: ` <p>store works!</p> `,
  styles: [],
})
export class StoreComponent implements OnInit {
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    /*
    this.firestoreService.getCards().subscribe((c) => {
      this.cards = c;
      console.log(c);
      
    });
    */
  }

  cards: Card[] = [];
}
