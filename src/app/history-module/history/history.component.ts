import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../Service/enum.service';
import { HistoryServiceService } from './history-service.service';
import { ServiceManageUserService } from 'src/app/manage-users-module/manage_users/service-manage-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
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
  clientTable = true;
  empTable = false;
  arcticleTable = false;
  filters = true;
  translation: any;
  // client
  CLIENT_DATA = [
    {
      clientId: 1,
      surname: '',
      firstName: '',
      companyName: '',
      emailAddress: '',
      selected: false,
    },
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = true;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  clienttotalItems: any;
  employeetotalItems: any;
  articletotalItems: any;
  // employee
  EMPLOYEE_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      fullname: '',
      email: '',
      companyName: '',
      selected: false,
    },
  ];
  // for sorting
  ascendingOrder = true;
  sortingColumn = 'clientId';
  ascendingOrderFullName = true;
  sortingColumnFullName = 'fullname';
  ascendingOrderEmail = true;
  sortingColumnEmail = 'email';
  ascendingOrderCompanyName = true;
  sortingColumnCompanyName = 'companyName';

  constructor(
    private translationService: TranslationService,
    private historyService: HistoryServiceService,
    private mangerUserService: ServiceManageUserService,
    private router: Router
  ) {
    this.CLIENT_DATA = this.historyService.CLIENT_DATA;
    this.ARTICLES_DATA = this.historyService.ARTICLES_DATA;
    this.EMPLOYEE_DATA = this.historyService.EMPLOYEES_DATA;
    this.clienttotalItems = this.CLIENT_DATA.length;
    this.employeetotalItems = this.EMPLOYEE_DATA.length;
    this.articletotalItems = this.ARTICLES_DATA.length;
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.history + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(Enums.pageName.history)
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.history + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.history + '_Translations') ?? ''
      );
    }
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  clientTableToogle() {
    if ((this.empTable && this.arcticleTable) == false) {
      this.clientTable = true;
      this.empTable = false;
      this.arcticleTable = false;
      this.filters = true;
    }
  }

  empToogle() {
    if ((this.clientTable && this.arcticleTable) == false) {
      this.empTable = true;
      this.clientTable = false;
      this.arcticleTable = false;
      this.filters = true;
    }
  }

  arcticleToogle() {
    if ((this.empTable && this.clientTable) == false) {
      this.arcticleTable = true;
      this.empTable = false;
      this.clientTable = false;
      this.filters = false;
    }
  }

  filterToogle() {
    this.filters = !this.filters;
  }

  // client
  // table pagination methods------------------------------------------------------------------------------------------------
  get ClientpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.CLIENT_DATA.slice(startIndex, endIndex);
  }

  get clienttotalPages(): number {
    return Math.ceil(this.clienttotalItems / this.itemsPerPage);
  }

  getPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.clienttotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  jumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.clienttotalPages) {
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
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.clienttotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //add filter
  addFilter() {
    this.add_filter = !this.add_filter;
  }
  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.CLIENT_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  handleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
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
      var clickoutOverlay = document.createElement('div');
      clickoutOverlay.setAttribute('class', 'clickoutOverlay');
      document.body.prepend(clickoutOverlay);

      clickoutOverlay.addEventListener('click', () => {
        this.closePopUps();
        clickoutOverlay.remove();
      });

      setTimeout(() => {
        this.openPopUpById(popUpName);
      }, 30);
    }
  }

  // article
  isDropdownOpen: boolean = false;
  ARTICLES_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles: '',
      published_date: '',
      selected: false,
    },
  ];

  // table pagination methods------------------------------------------------------------------------------------------------
  get articlepaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.ARTICLES_DATA.slice(startIndex, endIndex);
  }

  get articletotalPages(): number {
    return Math.ceil(this.articletotalItems / this.itemsPerPage);
  }

  articlegetPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.articletotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  articlejumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.articletotalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  articlecalculateMaxValue(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.articletotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //table select all---------------------------------------------------------------------------------------------
  articletoggleSelectAll() {
    this.ARTICLES_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  articlehandleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  //table button panel option---------------------------------------------------------------------------------------------
  articletogglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  articlehandleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;
  }

  articlehandleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  articlehandleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  articlehandleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  articlehandleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  articlehandleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  // employee

  // sorting for id-------------------------------------------------------------------------------------------------
  employeetoggleIdSorting() {
    this.ascendingOrder = !this.ascendingOrder;
    this.sortingColumn = 'clientId';
    this.EMPLOYEE_DATA = this.employeesortData([...this.employeepaginatedData]);
  }

  employeesortData(data: any) {
    return data.sort((a: any, b: any) => {
      if (this.ascendingOrder) {
        return a[this.sortingColumn] - b[this.sortingColumn];
      } else {
        return b[this.sortingColumn] - a[this.sortingColumn];
      }
    });
  }
  // sorting for name-------------------------------------------------------------------------------------------------
  employeetoggleFullNameSorting() {
    this.ascendingOrderFullName = !this.ascendingOrderFullName;
    this.sortingColumnFullName = 'fullname';
    this.EMPLOYEE_DATA = this.employeesortDataName([
      ...this.employeepaginatedData,
    ]);
  }

  employeesortDataName(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnFullName].toLowerCase();
      const nameB = b[this.sortingColumnFullName].toLowerCase();

      if (this.ascendingOrderFullName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
  // sorting for email-------------------------------------------------------------------------------------------------
  employeetoggleEmailSorting() {
    this.ascendingOrderEmail = !this.ascendingOrderEmail;
    this.sortingColumnEmail = 'email';
    this.EMPLOYEE_DATA = this.employeesortDataEmail([
      ...this.employeepaginatedData,
    ]);
  }

  employeesortDataEmail(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnEmail].toLowerCase();
      const nameB = b[this.sortingColumnEmail].toLowerCase();

      if (this.ascendingOrderEmail) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
  // sorting for company-------------------------------------------------------------------------------------------------
  employeetoggleCompanyNameSorting() {
    this.ascendingOrderCompanyName = !this.ascendingOrderCompanyName;
    this.sortingColumnCompanyName = 'companyName';
    this.EMPLOYEE_DATA = this.employeesortDataCompany([
      ...this.employeepaginatedData,
    ]);
  }

  employeesortDataCompany(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumnCompanyName].toLowerCase();
      const nameB = b[this.sortingColumnCompanyName].toLowerCase();

      if (this.ascendingOrderCompanyName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get employeepaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.EMPLOYEE_DATA.slice(startIndex, endIndex);
  }

  get employeetotalPages(): number {
    return Math.ceil(this.employeetotalItems / this.itemsPerPage);
  }

  employeegetPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.employeetotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  employeejumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.employeetotalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  employeecalculateMaxValue(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.employeetotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //add filter
  employeeaddFilter() {
    this.add_filter = !this.add_filter;
  }

  //table select all---------------------------------------------------------------------------------------------
  employeetoggleSelectAll() {
    this.EMPLOYEE_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  employeehandleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  employeetoggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  employeetogglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  employeehandleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;

    this.router.navigate([`manage_users/add_client/${clientId}`]);
  }

  employeehandleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    this.router.navigate(['manage_users/dataUsage'], {
      queryParams: { id: clientId, type: 'employee' },
    });
    // Implement your logic for handling the "History" button click
  }

  employeehandleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    this.router.navigate(['manage_users/history'], {
      queryParams: { id: clientId, type: 'employee' },
    });
    // Implement your logic for handling the "Data Usage" button click
  }

  employeehandleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  employeehandleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  employeehandleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }
}
