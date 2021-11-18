import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';
import { AppSelectorBateauComponent } from './app-selector-bateau/app-selector-bateau.component';
import { AppSailsMesureComponent } from './app-sails-mesure/app-sails-mesure.component';
import { AppSailsListComponent } from './app-sails-list/app-sails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRxjsComponent,
    AppSelectorBateauComponent,
    AppSailsMesureComponent,
    AppSailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
