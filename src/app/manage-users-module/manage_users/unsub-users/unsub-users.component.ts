import { Component } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';
import * as moment from 'moment';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-unsub-users',
  templateUrl: './unsub-users.component.html',
  styleUrls: ['./unsub-users.component.css'],
})
export class UnsubUsersComponent {
  isDropdownOpen: boolean = false;
  // isChecked: boolean[] = [
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ];
  USER_DATA = [
    {
      userId: 0,
      name: '',
      dateAdded: '',
      emailAddress: '',
      verfied: '',
      registered: false,
      gender: '',
      selected: false,
    },
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  selectedOption: string = ''; // Initialize with an appropriate default value
  enteredValue: string = ''; // Initialize with an appropriate default value
  searchUnsubcriberUseroptions = [{ value: '', title: '' }];
  DateAddedto = new Date();
  DateAddedfrom = new Date();
  DateLastUpdatedto = new Date();
  DateLastUpdatedfrom = new Date();
  selectedFilters: { option: string; value: any }[] = [];
  filters = [
    { id: 0, label: 'Register Online', value: false },
    { id: 1, label: 'Register Offline', value: false },
    { id: 6, label: 'Male', value: false },
    { id: 7, label: 'Female', value: false },
    { id: 8, label: 'Unknown', value: false },
    { id: 9, label: 'All', value: false },

    // Add more filters as needed
  ];
  isChecked: boolean[] = Array(this.filters.length).fill(false);
  checkBoSselectedFilters: { option: string; value: any }[] = [];
  translation: any;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService
  ) {
    this.searchUnsubcriberUseroptions =
      this.mangerUserService.searchUnsubcriberUseroptions;
    this.USER_DATA = this.mangerUserService.UNSUBSCRIBER_USER_USER_DATA;
    this.totalItems = this.USER_DATA.length;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(
        Enums.pageName.unsubscribedUsers + '_Translations'
      ) === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.unsubscribedUsers
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.unsubscribedUsers + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(
          Enums.pageName.unsubscribedUsers + '_Translations'
        ) ?? ''
      );
    }
  }

  clear() {
    // this.isChecked = []
    this.selectedOption = '';
    this.enteredValue = '';
    this.isChecked = [];
    this.selectedFilters = []; // Clear all filters
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

  // ---------------------------------------------------------------------------------------------------

  //add filter
  addFilter() {
    debugger;
    if (this.selectedOption !== '') {
      if (this.selectedOption && this.enteredValue) {
        const existingFilterIndex = this.selectedFilters.findIndex(
          (filter) => filter.option === this.selectedOption
        );

        if (existingFilterIndex === -1) {
          this.selectedFilters.push({
            option: this.selectedOption,
            value: this.enteredValue,
          });
        }

        // this.applyFilters();
        (this.selectedOption = ''), (this.enteredValue = '');
      } else if (this.selectedOption == 'DateAdded') {
        const existingFilterIndex = this.selectedFilters.findIndex(
          (filter) => filter.option === this.selectedOption
        );

        console.log(this.selectedOption);

        if (existingFilterIndex === -1) {
          // Now you can use fromDate and toDate safely
          this.selectedFilters.push({
            option: this.selectedOption,
            value: `${moment(this.DateAddedfrom).format(
              'DD/MM/YYYY'
            )} - ${moment(this.DateAddedto).format('DD/MM/YYYY')}`,
          });
        }
      }
      this.selectedOption = '';
      this.enteredValue = '';
    }

    console.log(this.selectedFilters);
  }

  removeFilter(index: number) {
    if (index >= 0 && index < this.selectedFilters.length) {
      const removedFilter = this.selectedFilters[index];

      if (removedFilter.value.includes('-')) {
        // If the value of the removed filter contains '-', it's a date filter
        this.selectedFilters.splice(index, 1);
        return;
      }

      this.selectedFilters.splice(index, 1);
      // Apply changes after removing the filter
      this.addFilter();
    }
  }

  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.USER_DATA.forEach((user) => {
      user.selected = this.selectAll;
    });
  }

  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];

    // Log both index and filter name
    const filterName = this.filters[index].label;
    console.log(`Index ${index}: ${filterName} ${this.isChecked[index]}`);

    // Update selectedFilters array
    const existingFilterIndex = this.checkBoSselectedFilters.findIndex(
      (filter) => filter.option === filterName
    );

    if (this.isChecked[index]) {
      // If the checkbox is checked, update or add the filter
      if (existingFilterIndex !== -1) {
        // If filter already exists in selectedFilters, update its value
        this.checkBoSselectedFilters[existingFilterIndex].value = true;
      } else {
        // If filter doesn't exist, add it to selectedFilters
        this.checkBoSselectedFilters.push({ option: filterName, value: true });
      }
    } else {
      // If the checkbox is unchecked, remove the filter
      if (existingFilterIndex !== -1) {
        this.checkBoSselectedFilters.splice(existingFilterIndex, 1);
      }
    }

    // this.applyFilters();
    console.log(this.checkBoSselectedFilters);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(userId: any) {
    // this.panel = !this.panel;
    this.panelid = userId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(userId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(userId);
    this.panel = false;
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

  //avatar color----------------------------------------------------------------------------------------------------
  avaColorservice(letter: string) {
    try {
      const result = this.mangerUserService.avaColoe(letter); // Call the function and wait for the result
      return result; // Handle the result here
    } catch (error) {
      console.error('Error in avaColorService:', error);
      throw error; // Rethrow the error to handle it elsewhere if needed
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
  }
  openPopUpById(popUpName: any) {
    this.panel = false;
    this.isDropdownOpen = false;
    if (popUpName == 'tablepanel') {
      this.panel = true;
    } else if (popUpName == 'action') {
      this.isDropdownOpen = true;
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
