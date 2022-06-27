import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NxWelcomeComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
