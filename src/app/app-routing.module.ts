import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './shared/formulario/formulario.component';
import { ListagemComponent } from './shared/listagem/listagem.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '',   redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'listagem', component: ListagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
