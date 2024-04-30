
import { Component } from '@angular/core';
import { ServiceManageUserService } from '../../manage-users-module/manage_users/service-manage-user.service';
import * as Enums from '../../Service/enum.service';
import { TranslationService } from '../../Service/translation.service';
import { Router } from '@angular/router';
import { ConnectionService } from './connection.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
})

export class ConnectionComponent {
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
  CONNECTION_DATA = [
    {
      connectionId: 0,
      exclude: '',
      imgUrl: '',
      fullname: '',
      title: '',
      published_date: '',
      platform: '',
      selected: false,
    }
  ];
  selectAll = false;
  colors = ['#9c27b0', '#FF8095', '#3399FF', '#29CCB1'];
  panel = false;
  add_filter = true;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  // for sorting
  ascendingOrder = true;
  sortingColumn = 'connectionId';
  ascendingOrderFullName = true;
  sortingColumnFullName = 'fullname';
  ascendingOrdertitle = true;
  sortingColumntitle = 'title';
  ascendingOrderCompanyName = true;
  sortingColumnCompanyName = 'companyName';
  translation: any;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService,
    private router: Router,
    private connectionService: ConnectionService,
  ) {
    this.CONNECTION_DATA = this.connectionService.CONNECTION_DATA;
    this.totalItems = this.CONNECTION_DATA.length;
  }

  async ngOnInit() {
    await this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.connection + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.connection
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.connection + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.connection + '_Translations') ?? ''
      );
    }
  }

  // sorting for id-------------------------------------------------------------------------------------------------
  toggleIdSorting() {
    this.ascendingOrder = !this.ascendingOrder;
    this.sortingColumn = 'connectionId';
    this.CONNECTION_DATA = this.sortData([...this.paginatedData]);
  }

  sortData(data: any) {
    return data.sort((a: any, b: any) => {
      if (this.ascendingOrder) {
        return a[this.sortingColumn] - b[this.sortingColumn];
      } else {
        return b[this.sortingColumn] - a[this.sortingColumn];
      }
    });
  }

  // sorting for name-------------------------------------------------------------------------------------------------
  toggleFullNameSorting() {
    this.ascendingOrderFullName = !this.ascendingOrderFullName;
    this.sortingColumnFullName = 'fullname';
    this.CONNECTION_DATA = this.sortDataName([...this.paginatedData]);
  }

  sortDataName(data: any) {
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

  // sorting for title-------------------------------------------------------------------------------------------------
  toggletitleSorting() {
    this.ascendingOrdertitle = !this.ascendingOrdertitle;
    this.sortingColumntitle = 'title';
    this.CONNECTION_DATA = this.sortDatatitle([...this.paginatedData]);
  }

  sortDatatitle(data: any) {
    return data.sort((a: any, b: any) => {
      const nameA = a[this.sortingColumntitle].toLowerCase();
      const nameB = b[this.sortingColumntitle].toLowerCase();

      if (this.ascendingOrdertitle) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }

  // sorting for company-------------------------------------------------------------------------------------------------
  toggleCompanyNameSorting() {
    this.ascendingOrderCompanyName = !this.ascendingOrderCompanyName;
    this.sortingColumnCompanyName = 'companyName';
    this.CONNECTION_DATA = this.sortDataCompany([...this.paginatedData]);
  }

  sortDataCompany(data: any) {
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
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.CONNECTION_DATA.slice(startIndex, endIndex);
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

  //table select all---------------------------------------------------------------------------------------------
  toggleSelectAll() {
    this.CONNECTION_DATA.forEach((connection) => {
      connection.selected = this.selectAll;
    });
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(connectionId: any) {
    this.panelid = connectionId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(connectionId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(connectionId);
    this.panel = false;
  }

  handleHistoryClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  handleDataUsageClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  handleSendPasswordClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  handleSendUsernameClick(connectionId: any) {
    console.log(connectionId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  handleDeleteClick(connectionId: any) {
    console.log(connectionId);
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

  routeToAddConnection() {
    this.router.navigate(['connection/addConnection']);
  }
}
