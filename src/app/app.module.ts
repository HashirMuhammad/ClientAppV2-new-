import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
// import { ChartsModule } from '@progress/kendo-angular-charts';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from '@progress/kendo-angular-buttons';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { EditorModule } from '@progress/kendo-angular-editor';
// import { GridsterModule } from 'angular-gridster2';
// import { LabelModule } from '@progress/kendo-angular-label';
// import { TruncatePipe } from './Pipes/truncate.pipe';
// import { UploadModule } from '@progress/kendo-angular-upload';
// import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
// import { LayoutModule } from '@progress/kendo-angular-layout';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { InfomailerComponent } from './dashboard-module/dashboard/infomailer_&_file&sign/infomailer/infomailer.component';
// import { FileAndSignComponent } from './dashboard-module/dashboard/infomailer_&_file&sign/file-and-sign/file-and-sign.component';
// import { InfolearningComponent } from './dashboard-module/dashboard/infolearning_&_high_achievers/infolearning/infolearning.component';
// import { HighAchieversComponent } from './dashboard-module/dashboard/infolearning_&_high_achievers/high-achievers/high-achievers.component';
// import { SearchClientsComponent } from './manage-users-module/manage_users/search-clients/search-clients.component';
// import { AddClientComponent } from './manage-users-module/manage_users/add-client/add-client.component';
// import { SearchEmployeesComponent } from './manage-users-module/manage_users/search-employees/search-employees.component';
// import { AddEmployeeComponent } from './manage-users-module/add-employee/add-employee.component';
// import { UnsubUsersComponent } from './manage-users-module/manage_users/unsub-users/unsub-users.component';
// import { DataImportComponent } from './manage-users-module/manage_users/data-import/data-import.component';
// import { HistoryComponent } from './history-module/history/history.component';
// import { WriteAnArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/write-an-article.component';
// import { SimpleArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/simple-article/simple-article.component';
// import { AiArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/ai-article/ai-article.component';
// import { ArticlesDetailsComponent } from './manage-articles-module/manage_arcticles/write-an-article/articles-details/articles-details.component';
// import { PreviewArticleComponent } from './manage-articles-module/manage_arcticles/write-an-article/preview-article/preview-article.component';
// import { ConnectionComponent } from './connection-module/connection/connection.component';
// import { SocialMediaComponent } from './social-media-module/social-media/social-media.component';
// import { NewPostComponent } from './social-media-module/social-media/new-post/new-post.component';
// import { ConfigurationComponent } from './social-media-module/social-media/configuration/configuration.component';
// import { ManageArticlesComponent } from './manage-articles-module/manage_arcticles/manage-articles/manage-articles.component';
// import { ViewArticlesComponent } from './manage-articles-module/manage_arcticles/view-articles/view-articles.component';
// import { SearchArticlesComponent } from './manage-articles-module/manage_arcticles/search-articles/search-articles.component';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { ProofNewslettersComponent } from './manage-articles-module/manage_arcticles/select-concept/proof-newsletters/proof-newsletters.component';
// import { ManagerUserDashboardComponent } from './manage-users-module/manage_users/manager-user-dashboard/manager-user-dashboard.component';
// import { SelectConceptComponent } from './manage-articles-module/manage_arcticles/select-concept/select-concept.component';

// import { ReauthorizeArticleComponent } from './dashboard-module/dashboard/reauthorize-article/reauthorize-article.component';
// import { AddConnectionComponent } from './connection-module/connection/add-connection/add-connection.component';
// import { ReportsComponent } from './reports-module/reports/reports.component';
// import { SettingsComponent } from './social-media-module/social-media/settings/settings.component';
// import { UserHistoryComponent } from './manage-users-module/manage_users/history/history.component';
// import { DataUsageComponent } from './manage-users-module/data-usage/data-usage.component';
// import { NormalImportComponent } from './manage-users-module/manage_users/data-import/normal-import/normal-import.component';
// import { ShareFileImportComponent } from './manage-users-module/manage_users/data-import/share-file-import/share-file-import.component';
// import { ProfileSettingsComponent } from './manage-users-module/manage_users/profile-settings/profile-settings.component';
import { EnumService } from './Service/enum.service';
import { TranslationService } from './Service/translation.service';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarButtonsComponent } from './layout/sidebar/sidebar-buttons/sidebar-buttons.component';
import { HeaderComponent } from './layout/header/header.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';

import { ConnectionModule } from './connection-module/connection.module';
import { ReportsModule } from './reports-module/reports.module';
import { SocialMediaModule } from './social-media-module/social-media.module';
import { HistoryModule } from './history-module/history.module';
import { ManageUsersModule } from './manage-users-module/manage-users.module';
import { ManageArticlesModule } from './manage-articles-module/manage-articles.module';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // DashboardComponent,
    // InfomailerComponent,
    // FileAndSignComponent,
    // InfolearningComponent,
    // HighAchieversComponent,
    // SearchClientsComponent,
    // AddClientComponent,
    // SearchEmployeesComponent,
    // AddEmployeeComponent,
    // UnsubUsersComponent,
    // DataImportComponent,
    // HistoryComponent,
    // WriteAnArticleComponent,
    // SimpleArticleComponent,
    // AiArticleComponent,
    // ArticlesDetailsComponent,
    // PreviewArticleComponent,
    // ConnectionComponent,
    // SocialMediaComponent,
    // NewPostComponent,
    // ConfigurationComponent,
    // ManageArticlesComponent,
    // ViewArticlesComponent,
    // SearchArticlesComponent,
    // ProofNewslettersComponent,
    // ManagerUserDashboardComponent,
    // SelectConceptComponent,
    SidebarButtonsComponent,
    // ReauthorizeArticleComponent,
    BreadcrumbComponent,
    // AddConnectionComponent,
    // ReportsComponent,
    // SettingsComponent,
    // UserHistoryComponent,
    // DataUsageComponent,
    // NormalImportComponent,
    // ShareFileImportComponent,
    // ProfileSettingsComponent,
    HeaderComponent,
    // TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    // ChartsModule,
    BrowserAnimationsModule,
    // ButtonsModule,
    // FormsModule,
    // InputsModule,
    // ButtonModule,
    // DateInputsModule,
    // EditorModule,
    // LabelModule,
    // GridsterModule,
    // MultiSelectModule,
    HttpClientModule,
    // DropDownsModule,
    // LayoutModule,
    // ProgressBarModule,
    // UploadModule,
    ConnectionModule,
    ReportsModule,
    SocialMediaModule,
    HistoryModule,
    ManageUsersModule,
    ManageArticlesModule,
  ],
  providers: [TranslationService, EnumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
