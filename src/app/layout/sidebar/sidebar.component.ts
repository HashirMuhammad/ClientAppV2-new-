import {
  Component,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../Service/translation.service';
import * as Enums from '../../Service/enum.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() receivedValue = false;
  showManageUsersMore = false;
  showManageContentMore = false;
  isMobile!: boolean;
  showDropdown = false;
  darkmode = false;
  moreApps = false;
  translation: any;
  moreAppDiv: boolean = false;

  constructor(
    private route: Router,
    private elRef: ElementRef,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    const storedDarkMode = localStorage.getItem('darkmode');
    // console.log(storedDarkMode)
    if (storedDarkMode == 'dark') {
      this.darkmode = true;
      console.log(this.darkmode)
    } else {
      this.darkmode = false;
    }
    this.checkScreenSize(); // Check screen size when component is initialized
    // this.getTranslations();
  }

  ngOnChanges(){
    this.darkmode = this.receivedValue;
    console.log(this.receivedValue);
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

  receiveDataFromChild(data: boolean) {
    this.showDropdown = data;
  }

  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 730; // Adjust the threshold as needed
    // If the screen size is not mobile, hide the dropdown
    if (!this.isMobile) {
      console.log('side mobile');

      this.showDropdown = false;
      this.isMobile = false;
    } else {
      this.showDropdown = false;
      // console.log('side window');
      this.isMobile = false;
      this.isMobile = true;
      this.ngOnInit();
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  moreApp() {
    this.moreAppDiv = !this.moreAppDiv;
  }

  // for popup toogle
  removeOverlayContainer() {
    let container = document.getElementsByClassName('clickoutOverlay');

    for (var i = 0; i < container.length; i++) {
      container[i].remove();
    }
  }
  closePopUps() {
    this.showDropdown = false;
  }
  openPopUpById(popUpName: any) {
    this.showDropdown = false;
    if (popUpName == 'dropdown') {
      this.showDropdown = true;
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
}
