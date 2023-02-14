import { Card } from "./../../modules/core/domain/entities/card.model";
import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";
import { User as UserModel } from "src/app/modules/core/domain/entities/user.model";

@Component({
  selector: "app-my-cards",
  templateUrl: "./my-cards.component.html",
  styles: [],
})
export class MyCardsComponent implements OnInit {
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getAppUser().subscribe((doc) => {
      this.currentAppUser = doc[0];
      this.cards = this.currentAppUser.deck!;
    });
  }

  currentAppUser!: UserModel;
  cards!: Card[];
}
