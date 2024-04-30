import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConnectionComponent } from './connection/add-connection/add-connection.component';
import { ConnectionComponent } from './connection/connection.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Connection' },
    component: ConnectionComponent,
  },
  {
    path: 'addConnection',
    component: AddConnectionComponent,
    data: { breadcrumb: 'addConnection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionModuleRoutingModule { }
