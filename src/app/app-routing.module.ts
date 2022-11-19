import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { UpdateComponent } from './components/update/update.component';


const routes: Routes = [
  {
    /*quando a rora for vazia renderiza para o componente ReadAllComponent e assim sucessivamente*/
    path: '',
    component: ReadAllComponent
  },

  {
    path: 'update/:id',
    component: UpdateComponent

  },

  {
    path: 'finalizados',
    component: FinalizadosComponent
  },

  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
