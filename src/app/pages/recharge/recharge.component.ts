import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";
import { User as UserModel } from "src/app/modules/core/domain/entities/user.model";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styles: [],
})
export class RechargeComponent implements OnInit {
  constructor(private $firestoreService: FirestoreService) {}

  ngOnInit(): void {
    // this.$firestoreService.getAppUser().subscribe((doc) => {
    //   this.currentAppUser = doc[0];
    // });
  }

  currentAppUser!: UserModel;
  rechargeValue: number = 0;

  recharge() {
    console.log(this.rechargeValue);
    if (this.currentAppUser.balance) {
      const newBalance = this.currentAppUser.balance! + this.rechargeValue;
      this.$firestoreService.updateUserBalance(this.currentAppUser, newBalance);
      console.log("recharge done");
    }
    return;
  }

  setRecharge($event: number) {
    this.rechargeValue = $event;
  }
}
