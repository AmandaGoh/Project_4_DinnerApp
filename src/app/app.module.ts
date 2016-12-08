import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//firebase
import { AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './user/login.component';

import { DragDropModule } from 'primeng/primeng';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryDaysComponent } from './recipes/grocery-days/grocery-days.component';

import './rxjs-extensions';
import { RecipeSearchComponent } from './recipe-search.component';
import { FooterComponent } from './user/footer.component';

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
    GroceryListComponent,
    GroceryDaysComponent,
    RecipeSearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    DragDropModule,
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
