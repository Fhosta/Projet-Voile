import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSelectorBateauComponent } from './app-selector-bateau/app-selector-bateau.component';
import { AppSailsMesureComponent } from './app-sails-mesure/app-sails-mesure.component';
import { AppSailsListComponent } from './app-sails-list/app-sails-list.component';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppSelectorBateauComponent,
    AppSailsMesureComponent,
    AppSailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
