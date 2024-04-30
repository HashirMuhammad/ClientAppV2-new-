import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.css'],
})
export class DataImportComponent {
  @Input() DashboardToogle: any;
  @Input() tableLength: any;
  isDropdownOpen: boolean = false;
  isChecked: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  USER_DATA = [
    {
      userId: 0,
      dateAdded: '',
      type: '',
      share: '',
      rows: '',
      mode: '',
      from: '',
      status: '',
      selected: false,
    },
  ];
  selectAll = false;
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  selectedUserIds: number[] = [];
  selectedOption: string = '';
  dataImportoptions = [{ value: '', title: '' }];
  enteredValue = '';
  dataImportshareoptions = [''];
  dataImportStatusoptions = [{ value: '', title: '' }];
  translation: any;
  isNewImportVisible = false;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService,
    private router: Router
  ) {
    this.USER_DATA = this.mangerUserService.DATA_IMPORT_USER_DATA;
    this.totalItems = this.USER_DATA.length;
    this.dataImportoptions = this.mangerUserService.dataImportoptions;
    this.dataImportshareoptions = this.mangerUserService.dataImportshareoptions;
    this.dataImportStatusoptions =
      this.mangerUserService.dataImportStatusoptions;
  }

  async ngOnInit() {
      this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.dataImport + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.dataImport
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.dataImport + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dataImport + '_Translations') ?? ''
      );
    }
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.USER_DATA.slice(startIndex, endIndex);
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

  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.USER_DATA.forEach((user) => {
      user.selected = this.selectAll;

      // Add or remove user ID based on the state of selectAll
      if (this.selectAll) {
        // If selectAll is true, add the user ID if not already present
        if (!this.selectedUserIds.includes(user.userId)) {
          this.selectedUserIds.push(user.userId);
        }
      } else {
        // If selectAll is false, remove the user ID if present
        const index = this.selectedUserIds.indexOf(user.userId);
        if (index !== -1) {
          this.selectedUserIds.splice(index, 1);
        }
      }
    });

    console.log('Updated selectedUserIds:', this.selectedUserIds);
  }

  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(userId: any) {
    this.panelid = userId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(userId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(userId);
    this.panel = false;

    this.router.navigate([`manage_users/share_file_import/${userId}`]);
  }

  handleHistoryClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  handleDataUsageClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  handleSendPasswordClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  handleSendUsernameClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  handleDeleteClick(userId: any) {
    console.log(userId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  // status styling-------------------------------------------------------
  getStatusStyle(status: string) {
    if (status === 'pending') {
      return {
        'background-color': '#EBF5FF',
        color: '#3399FF',
        'padding-left': '10px',
        'padding-right': '10px',
        'padding-top': '3px',
        'padding-bottom': '4px',
        'border-radius': '10px',
      };
    } else if (status === 'analyse data') {
      return {
        'background-color': '#FFF6D7',
        color: '#FFBF00',
        'padding-left': '10px',
        'padding-right': '10px',
        'padding-top': '3px',
        'padding-bottom': '4px',
        'border-radius': '10px',
      };
    } else if (status === 'completed') {
      return {
        'background-color': '#D7FFF8',
        color: '#29CCB1',
        'padding-left': '10px',
        'padding-right': '10px',
        'padding-top': '3px',
        'padding-bottom': '4px',
        'border-radius': '10px',
      };
    } else {
      return {}; // Return an empty object for default styling
    }
  }

  handlecheckboxClick(userId: number) {
    const index = this.selectedUserIds.indexOf(userId);

    if (index === -1) {
      // If userId is not in the array, add it
      this.selectedUserIds.push(userId);
    } else {
      // If userId is already in the array, remove it
      this.selectedUserIds.splice(index, 1);
    }

    console.log('Updated selectedUserIds:', this.selectedUserIds);
  }

  deleteSelectedUserids() {
    if (this.selectedUserIds.length > 0) {
    }
  }

  // for popup toogle
  removeOverlayContainer() {
    let container = document.getElementsByClassName('clickoutOverlay');

    for (var i = 0; i < container.length; i++) {
      container[i].remove();
    }
  }
  closePopUps() {
    this.isDropdownOpen = false;
    this.panel = false;
    this.isNewImportVisible = false;
  }
  openPopUpById(popUpName: any) {
    debugger;
    this.panel = false;
    this.isDropdownOpen = false;
    this.isNewImportVisible = false;
    if (popUpName == 'tablepanel') {
      this.panel = true;
    } else if (popUpName == 'action') {
      this.isDropdownOpen = true;
    } else if (popUpName == 'import') {
      this.isNewImportVisible = true;
    }
  }
  openPopUp(isOpen: any, popUpName: any) {
    this.removeOverlayContainer();
    debugger;

    if (isOpen) {
      this.closePopUps();
    } else {
      var clickoutOverlay = document.createElement('div');
      clickoutOverlay.setAttribute('class', 'clickoutOverlay');
      document.body.prepend(clickoutOverlay);

      clickoutOverlay.addEventListener('click', () => {
        this.closePopUps();
        clickoutOverlay.remove();
      });

      setTimeout(() => {
        this.openPopUpById(popUpName);
      }, 100);
    }
  }

  RoutetoNormalImport() {
    this.router.navigate(['manage_users/normal_import']);
  }

  RoutetoShareFileImport() {
    this.router.navigate(['manage_users/share_file_import']);
  }
}
