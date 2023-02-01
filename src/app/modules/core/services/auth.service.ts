import { Injectable } from "@angular/core";
import {
  Auth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private auth: Auth) {}

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logOut() {
    return signOut(this.auth);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
