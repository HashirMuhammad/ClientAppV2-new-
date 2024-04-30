import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from './Service/translation.service';
import * as Enums from './Service/enum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showDropdown = false;
  isMobile!: boolean;
  darkmode = false;
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
  translation: any;
  currenturl = true;
  chatBoxVisible = false;
  valueToSend = false;
  chatBoxToogle = false;

  constructor(
    private translationService: TranslationService,
  )
  {}

  async ngOnInit() {
    this.checkScreenSize();
    const url = localStorage.getItem('currentUrl');
    if (url == 'dashnoard') {
      this.currenturl = true;
    } else {
      this.currenturl = false;
    }
  }

  ngOnDestroy() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth < 730;
    if (!this.isMobile) {
      this.showDropdown = false;
      console.log('app window');
    } else {
      this.showDropdown = true;
      console.log('app mobile');
      this.isMobile = true;
    }
  }

  toggleChatBox() {
    this.chatBoxVisible = !this.chatBoxVisible;
  }

  handleButtonClick(variableValue: boolean) {
    console.log('Received variable from button:', variableValue);
    this.darkmode = variableValue;
    this.valueToSend = variableValue;

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

  translationChange() {
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

  toggleDarkMode() {
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

    
    console.log(this.darkmode);
  }

  chatBoxToogleFunc(){
    this.chatBoxToogle = true
  }
}
