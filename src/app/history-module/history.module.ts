import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryModuleRoutingModule } from './history-module-routing.module';
import { HistoryComponent } from './history/history.component';

import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        HistoryComponent
    ],
    imports: [
        CommonModule,
        HistoryModuleRoutingModule,
        FormsModule,
        InputsModule,
        DateInputsModule,
        SharedModule
    ]
})
export class HistoryModule { }
