import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnumService {
  constructor() {}
}
export enum pageName {
  dashboard = 'Dashboard',
  searchClients = 'Search Clients',
  addClients = 'Add_Client',
  searchEmployees = 'Search_Employees',
  addEmployees = 'Add_Employees',
  unsubscribedUsers = 'Unsubscribed_Users',
  dataImport = 'data_import',
  dataUsage = 'dataUsage',
  profileSettings = 'Profile Settings',
  writeAnArticle = 'write_an_article',
  manageArticle = 'manage_article',
  selectConcept = 'select_concept',
  history = 'history',
  socialMedia = 'social_media',
  reports = 'reports',
  connection = 'connection',
}
