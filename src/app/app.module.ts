import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeListItemComponent } from './components/poke-list-item/poke-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeListComponent,
    PokeListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
