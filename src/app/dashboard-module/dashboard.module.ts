import { NgModule } from '@angular/core';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HighAchieversComponent } from './dashboard/infolearning_&_high_achievers/high-achievers/high-achievers.component';
import { InfolearningComponent } from './dashboard/infolearning_&_high_achievers/infolearning/infolearning.component';
import { FileAndSignComponent } from './dashboard/infomailer_&_file&sign/file-and-sign/file-and-sign.component';
import { InfomailerComponent } from './dashboard/infomailer_&_file&sign/infomailer/infomailer.component';
import { ReauthorizeArticleComponent } from './dashboard/reauthorize-article/reauthorize-article.component';


import { FormsModule } from '@angular/forms';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridsterModule } from 'angular-gridster2';
import { UpcomingPostsComponent } from './dashboard/upcoming-posts/upcoming-posts.component';
import { DashboardDataImportComponent } from './dashboard/dashboard-data-import/dashboard-data-import.component';
import { DashboardSelectConceptComponent } from './dashboard/dashboard-select-concept/dashboard-select-concept.component';

import { SharedModule } from '../shared/shared.module';
import { InputsModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    DashboardComponent,
    HighAchieversComponent,
    InfolearningComponent,
    FileAndSignComponent,
    InfomailerComponent,
    ReauthorizeArticleComponent,
    UpcomingPostsComponent,
    DashboardDataImportComponent,
    DashboardSelectConceptComponent
    
  ],
  imports: [
    SharedModule,
    DashboardModuleRoutingModule,
    FormsModule,
    ChartsModule,
    GridsterModule,
    InputsModule
  ]
})
export class DashboardModule { }
