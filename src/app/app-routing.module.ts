import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './shared/formulario/formulario.component';
import { ListagemComponent } from './shared/listagem/listagem.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'listagem', component: ListagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
