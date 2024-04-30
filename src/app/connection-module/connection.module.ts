import { NgModule } from '@angular/core';

import { ConnectionModuleRoutingModule } from './connection-module-routing.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AddConnectionComponent } from './connection/add-connection/add-connection.component';
import { ConnectionComponent } from './connection/connection.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddConnectionComponent,
    ConnectionComponent
  ],
  imports: [
    SharedModule,
    ConnectionModuleRoutingModule,
    FormsModule,
    LayoutModule,
  ]
})
export class ConnectionModule { }
