import { Component } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';
import * as moment from 'moment';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css'],
})
export class SearchClientsComponent {
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
  SEARCHCLIENT_DATA = [
    {
      clientId: 0,
      surname: '',
      firstName: '',
      companyName: '',
      emailAddress: '',
      verfied: '',
      customerProfile: '',
      accountManager: '',
      sICcode: '',
      address: '',
      date: '',
      tags: '',
      registered: false,
      printedNewsletter: false,
      emailNewsletter: false,
      gender: '',
      selected: false,
    },
  ];
  // paginatedData = [
  //   {
  //     clientId: 0,
  //     surname: '',
  //     firstName: '',
  //     companyName: '',
  //     emailAddress: '',
  //     verfied: '',
  //     customerProfile: '',
  //     accountManager: '',
  //     sICcode: '',
  //     address: '',
  //     date: '',
  //     tags: '',
  //     registered: false,
  //     printedNewsletter: false,
  //     emailNewsletter: false,
  //     gender: '',
  //     selected: false,
  //   },
  // ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  searchClientsoptions = [{ value: '', title: '' }];
  selectedOption: string = ''; // Initialize with an appropriate default value
  enteredValue: string = ''; // Initialize with an appropriate default value
  CustomerProfile = [{ title: '', value: 0 }];
  CustomerProfileinput = '';
  AccountManager = [{ title: '', value: '' }];
  AccountManagerinput = '';
  Verified = [{ title: '', value: '' }];
  Verifiedinput = '';
  DateAddedto = new Date();
  DateAddedfrom = new Date();
  DateLastUpdatedto = new Date();
  DateLastUpdatedfrom = new Date();
  tagsAssignedlistItems = [''];
  // filters: { attribute: string; value: string }[] = [];
  selectedFilters: { option: string; value: any }[] = [];
  checkBoSselectedFilters: { option: string; value: any }[] = [];
  filters = [
    { id: 0, label: 'Register Online', value: false },
    { id: 1, label: 'Register Offline', value: false },
    { id: 2, label: 'Printed Newsletter', value: false },
    { id: 3, label: 'No Printed Newsletter', value: false },
    { id: 4, label: 'Email Newsletter', value: false },
    { id: 5, label: 'No Email Newsletter', value: false },
    { id: 6, label: 'Male', value: false },
    { id: 7, label: 'Female', value: false },
    { id: 8, label: 'Unknown', value: false },
    { id: 9, label: 'All', value: false },

    // Add more filters as needed
  ];
  isChecked: boolean[] = Array(this.filters.length).fill(false);
  translation: any;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService,
    private router: Router
  ) {
    this.CustomerProfile = this.mangerUserService.CustomerProfile;
    this.searchClientsoptions = this.mangerUserService.searchClientsoptions;
    this.tagsAssignedlistItems = this.mangerUserService.tagsAssignedlistItems;
    this.SEARCHCLIENT_DATA = this.mangerUserService.SEARCHCLIENT_DATA;
    this.totalItems = this.SEARCHCLIENT_DATA.length;
    this.AccountManager = this.mangerUserService.AccountManager;
    this.Verified = this.mangerUserService.Verified;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.searchClients + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.searchClients
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.searchClients + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.searchClients + '_Translations') ??
          ''
      );
    }
  }

  console(value: any) {
    console.log(value);
    console.log('date', moment(value).format('DD/MM/YYYY'));
  }

  selectedOptionchange() {
    this.enteredValue = '';
  }

  clear() {
    this.selectedOption = '';
    this.enteredValue = '';
    this.isChecked = [];
    this.selectedFilters = []; // Clear all filters
    // this.applyFilters();
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.SEARCHCLIENT_DATA.slice(startIndex, endIndex);
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
    this.console(this.selectedOption);
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
      } else if (this.selectedOption == 'LastUpdated') {
        const existingFilterIndex = this.selectedFilters.findIndex(
          (filter) => filter.option === this.selectedOption
        );

        console.log(this.selectedOption);

        if (existingFilterIndex === -1) {
          // Now you can use fromDate and toDate safely
          this.selectedFilters.push({
            option: this.selectedOption,
            value: `${moment(this.DateLastUpdatedfrom).format(
              'DD/MM/YYYY'
            )} - ${moment(this.DateLastUpdatedto).format('DD/MM/YYYY')}`,
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

  // applyFilters() {

  //   this.paginatedData = this.SEARCHCLIENT_DATA.filter((client: any) => {
  //     return this.selectedFilters.every((filter, index) => {
  //       console.log(index)
  //       console.log(filter.option)
  //       switch (filter.option) {

  //         case 'ClientID':
  //           return client.clientId.toString().includes(filter.value);
  //         case 'FirstName':
  //           return client.firstName.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'SurName':
  //           return client.surname.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'Company':
  //           return client.companyName.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'EmailAddress':
  //           return client.emailAddress.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'SICCode':
  //           return client.sICcode.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'Address':
  //           return client.address.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'CustomerProfile':
  //           return client.customerProfile.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'AccountManager':
  //           return client.accountManager.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'Verified':
  //           return client.verfied.toLowerCase().includes(filter.value.toLowerCase());
  //         case 'TagsAssigned':
  //           return client.tags.includes(filter.value);
  //         default:
  //           return true;
  //       }
  //     });
  //   });
  // }

  //table select all---------------------------------------------------------------------------------------------

  toggleSelectAll() {
    this.SEARCHCLIENT_DATA.forEach((client) => {
      client.selected = this.selectAll;
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
  togglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;

    this.router.navigate([`manage_users/add_client/${clientId}`]);
  }

  handleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    this.router.navigate(['manage_users/history'], {
      queryParams: { id: clientId, type: 'client' },
    });

    // Implement your logic for handling the "History" button click
  }

  handleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    this.router.navigate(['manage_users/dataUsage'], {
      queryParams: { id: clientId, type: 'client' },
    });
    // Implement your logic for handling the "Data Usage" button click
  }

  handleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  handleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  handleDeleteClick(clientId: any) {
    console.log(clientId);
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

  handleRowClick(clientId: any) {
    console.log('Clicked on row with clientId:', clientId);
    // Add any other logic you want to perform on row click
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
