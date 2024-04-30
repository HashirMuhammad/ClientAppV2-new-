import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar-buttons',
  templateUrl: './sidebar-buttons.component.html',
  styleUrls: ['./sidebar-buttons.component.css'],
  animations: [
    trigger('slideDown', [
      state('show', style({
        height: 'auto',
        overflow: 'visible',
      })),
      state('hide', style({
        height: '0',
        overflow: 'hidden',
      })),
      transition('hide => show', animate('300ms ease-in-out')),
      transition('show => hide', animate('300ms ease-in-out'))
    ])
  ],
})
export class SidebarButtonsComponent {
  @Output() sendData = new EventEmitter<boolean>();
  showManageUsersMore = false;
  showManageContentMore = false;
  showDropdown = false;
  dashboard = false;
  searchClients = false;
  addClients = false;
  searchEmployees = false;
  addEmployees = false;
  unsubUsers = false;
  dataImport = false;
  profileSettings = false;
  writeAnArticle = false;
  manageAnArticle = false;
  searchArticle = false;
  proofNewsletter = false;
  history = false;
  socialMedia = false;
  reports = false;
  infomailer = false;
  fileAndsign = false;
  infolearning = false;
  infoWizers = false;
  connection = false;
  reportAProblem = false;
  currentUrl = '';
  translation: any;
  isMobile: any;
  checkRoute: any;
  isCollapsed: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationService: TranslationService
  ) {}

  async ngOnInit() {
    await this.getTranslations();
    this.findCurrentRoute();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.dashboard + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.dashboard
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.dashboard + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dashboard + '_Translations') ?? ''
      );
    }
  }

  sendDataToParent() {
    this.sendData.emit(this.showDropdown);
  }

  //manage user button
  showManageUsersButtonList() {
    this.showManageUsersMore = true;
    this.showManageContentMore = false;
    this.dashboard = false;
    // this.router.navigate(['manage_users/dashboard']);
    // localStorage.setItem('currentUrl', 'manage_usersDashboard');
  }

  //manage content button
  showManageContentButtonList() {
    this.showManageContentMore = true;
    this.showManageUsersMore = false;
    this.dashboard = false;
  }

  //side bar routers
  routToDash() {
    // const screenWidth = window.innerWidth;
    // this.isMobile = screenWidth < 641;
    // debugger
    // console.log(this.isMobile)
    // if (this.isMobile == false) {
    // this.router.navigate(['dashboard']);
    //   console.log('app window');
    // } else if (this.isMobile == true) {
    //   this.router.navigate(['mobiledashboard']);
    //   console.log('app mobile');
    //   this.isMobile = true;
    // }

    this.router.navigate(['dashboard']);
    this.showManageUsersMore = false;
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.dashboard = true;
    localStorage.setItem('currentUrl', 'dashboard');
  }

  routToSearchClients() {
    this.router.navigate(['manage_users/search_clients']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.searchClients = true;
    localStorage.setItem('currentUrl', 'search_clients');
  }

  routToAddClient() {
    this.router.navigate(['manage_users/add_client']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.addClients = true;
    localStorage.setItem('currentUrl', 'add_client');
  }

  routToSearchEmp() {
    this.router.navigate(['manage_users/search_emp']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.searchEmployees = true;
    localStorage.setItem('currentUrl', 'search_emp');
  }

  routToAddemployee() {
    this.router.navigate(['manage_users/add_emp']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.addEmployees = true;
    localStorage.setItem('currentUrl', 'add_emp');
  }

  routToUnSubUsers() {
    this.router.navigate(['manage_users/unsubcribed_users']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.unsubUsers = true;
    localStorage.setItem('currentUrl', 'unsubcribed_users');
  }

  routToUDataImport() {
    this.router.navigate(['manage_users/data_import']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.dataImport = true;
    localStorage.setItem('currentUrl', 'data_import');
  }

  routToProfileSettings() {
    this.router.navigate(['manage_users/profile_settings']);
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.profileSettings = true;
    localStorage.setItem('currentUrl', 'profile_settings');
  }

  routToHistory() {
    this.router.navigate(['history']);
    this.showManageUsersMore = false;
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.history = true;
    localStorage.setItem('currentUrl', 'history');
  }

  routToWriteAnArticle() {
    this.router.navigate(['manage_content/write_an_article']);
    this.showManageUsersMore = false;
    this.artibutesFalse();
    this.writeAnArticle = true;
    localStorage.setItem('currentUrl', 'write_an_article');
  }

  routToConnection() {
    this.router.navigate(['connection']);
    this.showManageUsersMore = false;
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.connection = true;
    localStorage.setItem('currentUrl', 'connection');
  }

  routToSocial() {
    this.router.navigate(['social_media']);
    this.showManageUsersMore = false;
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.socialMedia = true;
    localStorage.setItem('currentUrl', 'social_media');
  }

  routToManageArticle() {
    this.router.navigate(['manage_content/manage_article']);
    this.showManageUsersMore = false;
    this.artibutesFalse();
    this.manageAnArticle = true;
    localStorage.setItem('currentUrl', 'manage_article');
  }

  routToSearchArticle() {
    this.router.navigate(['manage_content/search_article']);
    this.showManageUsersMore = false;
    this.artibutesFalse();
    this.searchArticle = true;
    localStorage.setItem('currentUrl', 'search_article');
  }

  routToProofNewsletters() {
    this.router.navigate(['manage_content/select_concept']);
    this.showManageUsersMore = false;
    this.artibutesFalse();
    this.proofNewsletter = true;
    localStorage.setItem('currentUrl', 'select_concept');
  }

  // for refresh page sidebar item is preselected
  findCurrentRoute() {
    this.checkRoute = localStorage.getItem('currentUrl');

    console.log(this.checkRoute);
    switch (this.checkRoute) {
      case 'dashboard':
        this.dashboard = true;
        break;
      case 'manage_usersDashboard':
        this.showManageUsersMore = true;
        this.dashboard = false;
        break;
      case 'search_clients':
        this.showManageUsersMore = true;
        this.searchClients = true;
        break;
      case 'add_client':
        this.showManageUsersMore = true;
        this.addClients = true;
        break;
      case 'search_emp':
        this.showManageUsersMore = true;
        this.searchEmployees = true;
        break;
      case 'add_emp':
        this.showManageUsersMore = true;
        this.addEmployees = true;
        break;
      case 'unsubcribed_users':
        this.showManageUsersMore = true;
        this.unsubUsers = true;
        break;
      case 'data_import':
        this.showManageUsersMore = true;
        this.dataImport = true;
        break;
      case 'write_an_article':
        this.showManageContentMore = true;
        this.writeAnArticle = true;
        break;
      case 'manage_article':
        this.showManageContentMore = true;
        this.manageAnArticle = true;
        break;
      case 'search_article':
        this.showManageContentMore = true;
        this.searchArticle = true;
        break;
      case 'select_concept':
        this.showManageContentMore = true;
        this.proofNewsletter = true;
        break;
      case 'history':
        this.history = true;
        break;
      case 'social_media':
        this.socialMedia = true;
        break;
      case 'connection':
        this.connection = true;
        break;
      case 'reports':
        this.reports = true;
        break;
      case 'profile_settings':
        this.profileSettings = true;
        break;

      default:
        console.log(this.checkRoute);
        break;
    }
  }

  // all toogle atributes
  artibutesFalse() {
    this.showDropdown = false;
    this.dashboard = false;
    this.searchClients = false;
    this.addClients = false;
    this.searchEmployees = false;
    this.addEmployees = false;
    this.unsubUsers = false;
    this.dataImport = false;
    this.profileSettings = false;
    this.writeAnArticle = false;
    this.manageAnArticle = false;
    this.searchArticle = false;
    this.proofNewsletter = false;
    this.history = false;
    this.socialMedia = false;
    this.reports = false;
    this.infomailer = false;
    this.fileAndsign = false;
    this.infolearning = false;
    this.infoWizers = false;
    this.connection = false;
    this.reportAProblem = false;
    this.reports = false;
    this.sendDataToParent();
  }

  routToReports() {
    this.showManageUsersMore = false;
    this.showManageContentMore = false;
    this.artibutesFalse();
    this.reports = true;
    this.router.navigate(['reports']);
    localStorage.setItem('currentUrl', 'reports');
  }
}
