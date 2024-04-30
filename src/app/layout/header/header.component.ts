import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslationService } from '../../Service/translation.service';
import * as Enums from '../../Service/enum.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() buttonClick = new EventEmitter<boolean>();
  currentRoute: string = '';
  routeName: string = '';
  showDropdown = false;
  isMobile!: boolean;
  darkmode!: boolean;
  isDropdownOpen = false;
  selectedOpt = '1';
  isDropdownOpennotification = false;
  notification = [
    { title: 'title goes here', date: '03/12/2023' },
    { title: 'title goes here', date: '03/12/2023' },
    { title: 'title goes here', date: '03/12/2023' },
    { title: 'title goes here', date: '03/12/2023' },
    { title: 'title goes here', date: '03/12/2023' },
    { title: 'title goes here', date: '03/12/2023' },
  ];
  breadcrumbData: any; // Define a property to hold the route data
  translation: any;
  quickCommadinput: any;
  areaList: Array<string> = [
    'Dashboard',
    // 'Manage Users',
    'Search Clients',
    'Add Clients',
    'Search Employees',
    'Add Employees',
    'Unsubcribed Users',
    'Data Import',
    'Profile Settings',
    'Write An Article',
    'Manage Article',
    'Search Article',
    'Select Concept',
    'History',
    'Connection',
    'Social Media',
    'Reports',
    'New Post',
    'Configuration',
  ];
  filteredAreaList: Array<string> = [];
  currenturl = true;
  dark = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
    private el: ElementRef
  ) {
    // this.getTranslations();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.routeName = this.currentRoute.replace('/', '');
        this.routeName = this.routeName.replace(/_/g, '&nbsp;');
        this.routeName = this.routeName.replace(
          '/',
          `<img src="../assets/dashboard/route-arrow.png" alt="Image" class="w-3 h-3 mt-1.5 mr-2 ml-2" />`
        );
        this.routeName = this.capitalizeFirstLetter(this.routeName);
      });

    // Check if portalId exists in localStorage
    const storedPortalId = localStorage.getItem('portalId');

    if (storedPortalId) {
      // The portalId exists in localStorage
      console.log('Portal ID exists:', storedPortalId);
      // this.getTranslations();
    } else {
      // The portalId does not exist in localStorage
      localStorage.setItem('portalId', this.selectedOpt);
      // this.getTranslations();
    }

    this.dark = true;
  }

  async ngOnInit() {
    // for breadcrumbs
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Access route data here
        this.breadcrumbData = this.getRouteData(this.activatedRoute.root);
      });
    console.log(this.breadcrumbData);

    await setTimeout(() => {
      this.getTranslations();
    }, 1000);

    const url = localStorage.getItem('currentUrl');
    if (url == 'dashnoard') {
      this.currenturl = true;
    } else {
      this.currenturl = false;
    }
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
        window.location.reload();
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dashboard + '_Translations') ?? ''
      );
    }
  }

  home() {
    this.router.navigate(['dashboard']);
    localStorage.setItem('currentUrl', 'dashboard');
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  callServiceForSidebar(event: any) {
    // Implement your logic here
    // Update filteredAreaList based on the input value or other criteria
    this.filteredAreaList = this.areaList.filter((item) =>
      item.toLowerCase().includes(this.quickCommadinput.toLowerCase())
    );

    console.log(this.filteredAreaList);
  }

  getRouteData(route: ActivatedRoute): any {
    let data = null;

    do {
      data = route.snapshot.data;
      route = route.firstChild as ActivatedRoute;
    } while (route);

    return data;
  }

  removeQuickCommand() {
    this.quickCommadinput = '';
  }

  toggleDarkMode() {
    // Toggle the 'dark' class on the body
    document.body.classList.toggle('dark');
    this.darkmode = !this.darkmode;
    if (this.darkmode == true) {
      localStorage.setItem('darkmode', 'dark');
    } else if (this.darkmode == false) {
      localStorage.setItem('darkmode', 'white');
    } else {
      this.darkmode = false;
      localStorage.setItem('darkmode', 'white');
    }

    this.buttonClick.emit(this.darkmode);
    console.log(this.darkmode);
  }

  navigateTo(selectedItem: string) {
    // Implement your navigation logic here
    console.log(`Navigating to: ${selectedItem}`);
    // Reset the input and filtered list after navigation
    switch (selectedItem) {
      case 'Dashboard':
        this.router.navigate(['/dashboard']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      // case 'Manage Users':
      //   this.router.navigate(['/manage_users/dashboard']);
      //   this.quickCommadinput = '';
      //   break;
      case 'Search Clients':
        this.router.navigate(['/manage_users/search_clients']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Add Clients':
        this.router.navigate(['/manage_users/add_client']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Search Employees':
        this.router.navigate(['/manage_users/search_emp']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Add Employees':
        this.router.navigate(['/manage_users/add_emp']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Unsubcribed Users':
        this.router.navigate(['/manage_users/unsubcribed_users']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Data Import':
        this.router.navigate(['/manage_users/data_import']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Profile Settings':
        this.router.navigate(['/manage_users/profile_settings']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Write An Article':
        this.router.navigate(['/manage_content/write_an_article']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Manage Article':
        this.router.navigate(['/manage_content/manage_article']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Search Article':
        this.router.navigate(['/manage_content/search_article']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Select Concept':
        this.router.navigate(['/manage_content/select_concept']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'History':
        this.router.navigate(['/history']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Connection':
        this.router.navigate(['connection']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Social Media':
        this.router.navigate(['social_media']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'New Post':
        this.router.navigate(['manage_articles/new_post']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Configuration':
        this.router.navigate(['social_media/configuration']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;
      case 'Reports':
        this.router.navigate(['reports']); // Adjust the route accordingly
        this.quickCommadinput = '';
        break;

      default:
        this.quickCommadinput = '';
        break;
    }

    this.quickCommadinput = '';
    this.filteredAreaList = [];
  }

  translationChange() {
    // Assuming Enums.pageName.dashboard is a string, for example, 'dashboard'
    const key = Enums.pageName.dashboard + '_Translations';
    localStorage.removeItem(key);

    const key2 = Enums.pageName.searchClients + '_Translations';
    localStorage.removeItem(key2);

    const key3 = Enums.pageName.addClients + '_Translations';
    localStorage.removeItem(key3);

    const key4 = Enums.pageName.searchEmployees + '_Translations';
    localStorage.removeItem(key4);

    const key5 = Enums.pageName.addEmployees + '_Translations';
    localStorage.removeItem(key5);

    const key6 = Enums.pageName.unsubscribedUsers + '_Translations';
    localStorage.removeItem(key6);

    const key7 = Enums.pageName.dataImport + '_Translations';
    localStorage.removeItem(key7);

    const key14 = Enums.pageName.profileSettings + '_Translations';
    localStorage.removeItem(key14);

    const key15 = Enums.pageName.dataUsage + '_Translations';
    localStorage.removeItem(key15);

    const key16 = Enums.pageName.reports + '_Translations';
    localStorage.removeItem(key16);

    const key8 = Enums.pageName.writeAnArticle + '_Translations';
    localStorage.removeItem(key8);

    const key9 = Enums.pageName.manageArticle + '_Translations';
    localStorage.removeItem(key9);

    const key10 = Enums.pageName.selectConcept + '_Translations';
    localStorage.removeItem(key10);

    const key11 = Enums.pageName.history + '_Translations';
    localStorage.removeItem(key11);

    const key12 = Enums.pageName.socialMedia + '_Translations';
    localStorage.removeItem(key12);

    const key13 = Enums.pageName.connection + '_Translations';
    localStorage.removeItem(key13);

    localStorage.removeItem('portalId');
    localStorage.setItem('portalId', this.selectedOpt);
    console.log(this.selectedOpt);

    this.getTranslations();
  }

  // for popup toogle
  removeOverlayContainer() {
    let container = document.getElementsByClassName('clickoutOverlay');

    for (var i = 0; i < container.length; i++) {
      container[i].remove();
    }
  }
  closePopUps() {
    this.isDropdownOpennotification = false;
    this.isDropdownOpen = false;
  }
  openPopUpById(popUpName: any) {
    this.isDropdownOpennotification = false;
    this.isDropdownOpen = false;
    if (popUpName == 'usercard') {
      this.isDropdownOpen = true;
    } else if (popUpName == 'notification') {
      this.isDropdownOpennotification = true;
    }
  }
  openPopUp(isOpen: any, popUpName: any) {
    this.removeOverlayContainer();
    debugger;

    if (isOpen) {
      this.closePopUps();
    } else {
      this.openPopUpById(popUpName);
      var clickoutOverlay = document.createElement('div');
      clickoutOverlay.setAttribute('class', 'clickoutOverlay');
      document.body.prepend(clickoutOverlay);

      clickoutOverlay.addEventListener('click', () => {
        this.closePopUps();
        clickoutOverlay.remove();
      });
    }
  }

  concole() {
    console.log(this.dark);

    if ((this.dark = true)) {
      this.toggleDarkMode();
    } else {
    }
  }
}
