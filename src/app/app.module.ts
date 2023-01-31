import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./modules/core/core.module";
import { provideDatabase, getDatabase } from "@angular/fire/database";
import { OrganismsModule } from "./shared/organisms/organisms.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    OrganismsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
