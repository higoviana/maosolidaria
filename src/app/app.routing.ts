import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { HomeComponent } from './home/home.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { PontosColetaComponent } from './pontos-coleta/pontos-coleta.component';
import { TermoUsoComponent } from './termo-uso/termo-uso.component';
import { Edit2Component } from './voluntarios/edit2/edit2.component';


const  APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'termo', component: TermoUsoComponent},
  {path: 'politica', component: PoliticaPrivacidadeComponent},
  {path: 'pontos', component: PontosColetaComponent},
  {path: 'edit', component: EditComponent},
  {path: 'voluntario', component: Edit2Component},
  {path: 'hall', component: ListComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);


