import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Enums from '../../../Service/enum.service';
import { TranslationService } from 'src/app/Service/translation.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent {
  selectAll = false;
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  ProfileSettings_DATA = [
    {
      id: 1,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 2,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 3,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 4,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 5,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 6,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 7,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 8,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 9,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 10,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
    {
      id: 11,
      title: '',
      date: '01/01/2024',
      type: 'client',
      mode: 'Add new data only',
      splitter: 'comma',
      action: '',
      selected: false,
    },
  ];
  translation: any;

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.getTranslations();
    this.totalItems = this.ProfileSettings_DATA.length;
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.profileSettings + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.profileSettings
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.profileSettings + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(
          Enums.pageName.profileSettings + '_Translations'
        ) ?? ''
      );
    }
  }

  //table select all---------------------------------------------------------------------------------------------

  toggleSelectAll() {
    this.ProfileSettings_DATA.forEach((profile) => {
      profile.selected = this.selectAll;
    });
  }

  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  handleRowClick(profileId: any) {
    console.log('Clicked on row with profileId:', profileId);
    // Add any other logic you want to perform on row click
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(id: any) {
    this.panelid = id;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(id: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(id);
    this.panel = false;

    this.router.navigate([`manage_users/share_file_import/${id}`]);
  }

  handleDeleteClick(id: any) {
    console.log(id);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.ProfileSettings_DATA.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  jumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.totalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  calculateMaxValue(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  routeToImportNewSteps() {
    this.router.navigate([`manage_users/share_file_import`]);
  }

  // for popup toogle
  removeOverlayContainer() {
    let container = document.getElementsByClassName('clickoutOverlay');

    for (var i = 0; i < container.length; i++) {
      container[i].remove();
    }
  }
  closePopUps() {
    this.panel = false;
  }
  openPopUpById(popUpName: any) {
    this.panel = false;
    if (popUpName == 'tablepanel') {
      this.panel = true;
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
