import { NgModule } from '@angular/core';

import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    SharedModule,
    ReportsModuleRoutingModule,
    FormsModule,
    LayoutModule,
    ProgressBarModule,
    ChartsModule,
  ]
})
export class ReportsModule { }
