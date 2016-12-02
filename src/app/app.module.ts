import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//firebase
import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './user/login.component';
import { ProfileComponent } from './user/profile.component';
import { routes } from './app.routes';

import { DragDropModule } from 'primeng/primeng';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

const firebaseConfig = {
    apiKey: "AIzaSyDKW2MbFFE18H5T1RCnFDm3RNg0Mwj01iQ",
    authDomain: "honey-dinner.firebaseapp.com",
    databaseURL: "https://honey-dinner.firebaseio.com",
    storageBucket: "honey-dinner.appspot.com",
    messagingSenderId: "20701296448"
};

const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    LoginComponent,
    ProfileComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
