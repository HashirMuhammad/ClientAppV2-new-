import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
// import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
// import { InfomailerComponent } from './dashboard-module/dashboard/infomailer_&_file&sign/infomailer/infomailer.component';
// import { FileAndSignComponent } from './dashboard-module/dashboard/infomailer_&_file&sign/file-and-sign/file-and-sign.component';
// import { InfolearningComponent } from './dashboard-module/dashboard/infolearning_&_high_achievers/infolearning/infolearning.component';
// import { HighAchieversComponent } from './dashboard-module/dashboard/infolearning_&_high_achievers/high-achievers/high-achievers.component';
// import { SearchClientsComponent } from './manage-users-module/manage_users/search-clients/search-clients.component';
// import { AddClientComponent } from './manage-users-module/manage_users/add-client/add-client.component';
// import { SearchEmployeesComponent } from './manage-users-module/manage_users/search-employees/search-employees.component';
// import { AddEmployeeComponent } from './manage-users-module/manage_users/add-employee/add-employee.component';
// import { UnsubUsersComponent } from './manage-users-module/manage_users/unsub-users/unsub-users.component';
// import { DataImportComponent } from './manage-users-module/manage_users/data-import/data-import.component';
// import { HistoryComponent } from './history-module/history/history.component';
// import { WriteAnArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/write-an-article.component';
// import { ArticlesDetailsComponent } from './manage-articles-module/manage_arcticles/write-an-article/articles-details/articles-details.component';
// import { ConnectionComponent } from './connection-module/connection/connection.component';
// import { SocialMediaComponent } from './social-media-module/social-media/social-media.component';
// import { NewPostComponent } from './social-media-module/social-media/new-post/new-post.component';
// import { ConfigurationComponent } from './social-media-module/social-media/configuration/configuration.component';
// import { ManageArticlesComponent } from './manage-articles-module/manage_arcticles/manage-articles/manage-articles.component';
// import { ViewArticlesComponent } from './manage-articles-module/manage_arcticles/view-articles/view-articles.component';
// import { SearchArticlesComponent } from './manage-articles-module/manage_arcticles/search-articles/search-articles.component';
// import { ProofNewslettersComponent } from './manage-articles-module/manage_arcticles/select-concept/proof-newsletters/proof-newsletters.component';
// import { ManagerUserDashboardComponent } from './manage-users-module/manage_users/manager-user-dashboard/manager-user-dashboard.component';
// import { SelectConceptComponent } from './manage-articles-module/manage_arcticles/select-concept/select-concept.component';
// import { SimpleArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/simple-article/simple-article.component';
// import { AiArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/ai-article/ai-article.component';
// import { PreviewArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/preview-article/preview-article.component';
// import { AddConnectionComponent } from './connection-module/connection/add-connection/add-connection.component';
// import { ReportsComponent } from './reports-module/reports/reports.component';
// import { SettingsComponent } from './social-media-module/social-media/settings/settings.component';
// import { UserHistoryComponent } from './manage-users-module/manage_users/history/history.component';
// import { DataUsageComponent } from './manage-users-module/manage_users/data-usage/data-usage.component';
// import { NormalImportComponent } from './manage-users-module/manage_users/data-import/normal-import/normal-import.component';
// import { ShareFileImportComponent } from './manage-users-module/manage_users/data-import/share-file-import/share-file-import.component';
// import { ProfileSettingsComponent } from './manage-users-module/manage_users/profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard-module/dashboard-module-routing.module').then(
      (x) => x.DashboardModuleRoutingModule
    ),
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'manage_users',
    loadChildren: () => import('./manage-users-module/manage-users-module-routing.module').then(
      (x) => x.ManageUsersModuleRoutingModule
    ),
  },
  {
    path: 'manage_content',
    loadChildren: () => import('./manage-articles-module/manage-articles-module-routing.module').then(
      (x) => x.ManageArticlesModuleRoutingModule
    ),
  },
  {
    path: 'history',
    loadChildren: () => import('./history-module/history-module-routing.module').then(
      (x) => x.HistoryModuleRoutingModule
    ),
  },
  // {
  //   path: 'connection',
  //   data: { breadcrumb: 'Connection' },
  //   component: ConnectionComponent,
  // },
  // {
  //   path: 'addConnection',
  //   component: AddConnectionComponent,
  //   data: { breadcrumb: 'connection' },
  // },
  {
    path: 'connection',
    loadChildren: () => import('./connection-module/connection-module-routing.module').then(
      (x) => x.ConnectionModuleRoutingModule
    ),
    data: { breadcrumb: 'Connection' },
  },
  // {
  //   path: 'social_media',
  //   data: { breadcrumb: 'Social Media' },
  //   component: SocialMediaComponent,
  // },
  // {
  //   path: 'manage_articles/new_post',
  //   data: { breadcrumb: 'Social Media' },
  //   component: NewPostComponent,
  // },
  // {
  //   path: 'social_media/configuration',
  //   data: { breadcrumb: 'Social Media' },
  //   component: ConfigurationComponent,
  // },
  // {
  //   path: 'social_media/settings',
  //   data: { breadcrumb: 'Social Media' },
  //   component: SettingsComponent,
  // },
  {
    path: 'social_media',
    loadChildren: () => import('./social-media-module/social-media-module-routing.module').then(
      (x) => x.SocialMediaModuleRoutingModule
    ),
  },
  // {
  //   path: 'reports',
  //   data: { breadcrumb: 'reports' },
  //   component: ReportsComponent,
  // },
  {
    path: 'reports',
    loadChildren: () => import('./reports-module/reports-module-routing.module').then(
      (x) => x.ReportsModuleRoutingModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
