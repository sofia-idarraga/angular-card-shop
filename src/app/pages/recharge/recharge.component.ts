import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "src/app/modules/core/services/firestore.service";
import { User as UserModel } from "src/app/modules/core/domain/entities/user.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styles: [],
})
export class RechargeComponent implements OnInit {
  constructor(private $firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.$firestoreService.getAppUser().subscribe((doc) => {
      this.currentAppUser = doc[0];
    });
  }

  currentAppUser!: UserModel;
  rechargeValue: number = 0;

  recharge(): void {
    console.log(this.rechargeValue);

    if (this.checkValue()) {
      const newBalance = this.currentAppUser.balance! + this.rechargeValue;
      this.$firestoreService.updateUserBalance(this.currentAppUser, newBalance);
      Swal.fire("", `Recharge done, new balance: $ ${newBalance}`, "success");
    } else {
      Swal.fire("", "Recharge must be between $1 and $2000", "error");
      return;
    }
  }

  private checkValue(): boolean {
    if (this.rechargeValue > 0 && this.rechargeValue < 2000) {
      return true;
    } else return false;
  }

  setRecharge($event: number): void {
    this.rechargeValue = $event;
  }
}
