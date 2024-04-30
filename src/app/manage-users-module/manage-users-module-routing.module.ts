import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './manage_users/add-client/add-client.component';
import { AddEmployeeComponent } from './manage_users/add-employee/add-employee.component';
import { DataImportComponent } from './manage_users/data-import/data-import.component';
import { NormalImportComponent } from './manage_users/data-import/normal-import/normal-import.component';
import { ShareFileImportComponent } from './manage_users/data-import/share-file-import/share-file-import.component';
import { DataUsageComponent } from './manage_users/data-usage/data-usage.component';
import { UserHistoryComponent } from './manage_users/history/history.component';
import { ManagerUserDashboardComponent } from './manage_users/manager-user-dashboard/manager-user-dashboard.component';
import { ProfileSettingsComponent } from './manage_users/profile-settings/profile-settings.component';
import { SearchClientsComponent } from './manage_users/search-clients/search-clients.component';
import { SearchEmployeesComponent } from './manage_users/search-employees/search-employees.component';
import { UnsubUsersComponent } from './manage_users/unsub-users/unsub-users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Manage Users',
    },
    children: [
      {
        path: 'dashboard',
        component: ManagerUserDashboardComponent,
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'search_clients',
        component: SearchClientsComponent,
        data: { breadcrumb: 'Search Clients' },
      },
      {
        path: 'history',
        component: UserHistoryComponent,
        data: { breadcrumb: 'History' },
      },
      {
        path: 'dataUsage',
        component: DataUsageComponent,
        data: { breadcrumb: 'Data Usage' },
      },
      {
        path: 'add_client',
        component: AddClientComponent,
        data: { breadcrumb: 'Add Client' },
      },
      {
        path: 'add_client/:id',
        component: AddClientComponent,
        data: { breadcrumb: 'Add Client' },
      },
      {
        path: 'search_emp',
        component: SearchEmployeesComponent,
        data: { breadcrumb: 'Search Employees' },
      },
      {
        path: 'add_emp',
        component: AddEmployeeComponent,
        data: { breadcrumb: 'Add Employees' },
      },
      {
        path: 'add_emp/:id',
        component: AddEmployeeComponent,
        data: { breadcrumb: 'Add Employees' },
      },
      {
        path: 'unsubcribed_users',
        component: UnsubUsersComponent,
        data: { breadcrumb: 'Unsubcribed Users' },
      },
      {
        path: 'data_import',
        component: DataImportComponent,
        data: { breadcrumb: 'Data Import' },
      },
      {
        path: 'normal_import',
        component: NormalImportComponent,
        data: { breadcrumb: 'Normal Import' },
      },
      {
        path: 'share_file_import',
        component: ShareFileImportComponent,
        data: { breadcrumb: 'Share File Import' },
      },
      {
        path: 'share_file_import/:id',
        component: ShareFileImportComponent,
        data: { breadcrumb: 'Share File Import' },
      },
      {
        path: 'profile_settings',
        component: ProfileSettingsComponent,
        data: { breadcrumb: 'Profile Settings' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersModuleRoutingModule { }
