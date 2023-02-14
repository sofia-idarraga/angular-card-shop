import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/modules/core/domain/entities/card.model";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";
import { User as UserModel } from "src/app/modules/core/domain/entities/user.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styles: [],
})
export class StoreComponent implements OnInit {
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getUnsoldCards().subscribe((c) => {
      this.cards = c;
    });
    this.firestoreService.getAppUser().subscribe((doc) => {
      this.currentAppUser = doc[0];
    });
    this.cards = this.cards.filter((c) => c.activeForSale != false);
  }

  currentAppUser: UserModel = {
    uid: "11111",
    email: "s@email.com",
    avatar: "",
    balance: 0,
    deck: [],
    recharges: [],
  };

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

  buyCard(card: Card): void {
    if (this.currentAppUser.balance! < card.price) {
      Swal.fire(
        "",
        `You don't have enough money to buy card # ${card.uid} `,
        "error"
      );

      return;
    }
    Swal.fire("", `Card # ${card.uid} added to your deck`, "success");
    this.firestoreService.updateCard(card, this.currentAppUser);
  }
}
