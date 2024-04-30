import { NgModule } from '@angular/core';

import { AddClientComponent } from './manage_users/add-client/add-client.component';
import { AddEmployeeComponent } from './manage_users/add-employee/add-employee.component';
import { DataImportComponent } from './manage_users/data-import/data-import.component';
import { NormalImportComponent } from './manage_users/data-import/normal-import/normal-import.component';
import { ShareFileImportComponent } from './manage_users/data-import/share-file-import/share-file-import.component';
import { DataUsageComponent } from './manage_users/data-usage/data-usage.component';
import { UserHistoryComponent } from './manage_users/history/history.component';
// import { ManagerUserDashboardComponent } from './manage_users/manager-user-dashboard/manager-user-dashboard.component';
import { ProfileSettingsComponent } from './manage_users/profile-settings/profile-settings.component';
import { SearchClientsComponent } from './manage_users/search-clients/search-clients.component';
import { SearchEmployeesComponent } from './manage_users/search-employees/search-employees.component';
import { UnsubUsersComponent } from './manage_users/unsub-users/unsub-users.component';
// import { TruncatePipe } from '../Pipes/truncate.pipe'; 

import { ManageUsersModuleRoutingModule } from './manage-users-module-routing.module';


import { FormsModule } from '@angular/forms';
import { UploadModule } from '@progress/kendo-angular-upload';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddClientComponent,
    AddEmployeeComponent,
    NormalImportComponent,
    DataImportComponent,
    UserHistoryComponent,
    ProfileSettingsComponent,
    ShareFileImportComponent,
    DataUsageComponent,
    // ManagerUserDashboardComponent,
    UnsubUsersComponent,
    SearchEmployeesComponent,
    SearchClientsComponent,
    // TruncatePipe
  ],
  imports: [
    SharedModule,
    ManageUsersModuleRoutingModule,
    FormsModule,
    UploadModule,
    InputsModule,
    DateInputsModule,
    LayoutModule,
    MultiSelectModule
  ]
})
export class ManageUsersModule { }
