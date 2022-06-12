import { navbarComponent } from './navbar/navbar.component';
import { footerComponent } from './footer/footer';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermoUsoComponent } from './termo-uso/termo-uso.component';
import { PontosColetaComponent } from './pontos-coleta/pontos-coleta.component';
import { MatInputModule } from '@angular/material/input';

import {environment} from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { Edit2Component } from './voluntarios/edit2/edit2.component';
import { List2Component } from './voluntarios/list2/list2.component';





@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    HomeComponent,
    PoliticaPrivacidadeComponent,
    TermoUsoComponent,
    PontosColetaComponent,
    EditComponent,
    ListComponent,
    EditComponent,
    Edit2Component,
    List2Component,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
