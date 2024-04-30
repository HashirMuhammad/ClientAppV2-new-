import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Enums from '../../Service/enum.service';
import { TranslationService } from '../../Service/translation.service';
import { ServiceManageUserService } from '../../manage-users-module/manage_users/service-manage-user.service';
import { SocialMediaServiceService } from './social-media-service.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent implements OnInit {
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
  // latest
  isDropdownOpen: boolean = false;
  LASTEST_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles: '',
      published_date: '',
      facebook: false,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
  ];
  selectAll = false;
  panel = false;
  add_filter = true;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  latesttotalItems: any;
  // pending
  PENDING_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles: '',
      published_date: '',
      facebook: false,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
  ];
  pendingtotalItems: any;
  // post error
  POSTERROR_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles: '',
      published_date: '',
      facebook: false,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
  ];
  posterrortotalItems: any;

  constructor(
    private route: Router,
    private translationService: TranslationService,
    private mangerUserService: ServiceManageUserService,
    private socialMediaService: SocialMediaServiceService
  ) {}

  ngOnInit() {
    this.LASTEST_DATA = this.socialMediaService.CLIENT_DATA;
    this.latesttotalItems = this.LASTEST_DATA.length;
    this.PENDING_DATA = this.socialMediaService.CLIENT_DATA;
    this.pendingtotalItems = this.PENDING_DATA.length;
    this.POSTERROR_DATA = this.socialMediaService.CLIENT_DATA;
    this.posterrortotalItems = this.POSTERROR_DATA.length;
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.socialMedia + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.socialMedia
        )
      ).subscribe((data) => {
        debugger;
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.socialMedia + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.socialMedia + '_Translations') ?? ''
      );
    }
  }

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  clientTableToogle() {
    this.clientTable = true;
    this.empTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  empToogle() {
    this.empTable = true;
    this.clientTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  arcticleToogle() {
    this.arcticleTable = true;
    this.empTable = false;
    this.clientTable = false;
    this.filters = !this.filters;
  }

  filterToogle() {
    this.filters = !this.filters;
  }

  // route
  routToConfig() {
    this.route.navigate(['social_media/configuration']);
  }

  routToNewPost() {
    this.route.navigate(['social_media/new_post']);
  }

  routToSettings() {
    this.route.navigate(['social_media/settings']);
  }
  // latest

  // table pagination methods------------------------------------------------------------------------------------------------
  get latestpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.LASTEST_DATA.slice(startIndex, endIndex);
  }

  get latesttotalPages(): number {
    return Math.ceil(this.latesttotalItems / this.itemsPerPage);
  }

  latestgetPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.latesttotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  latestjumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.latesttotalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  latestcalculateMaxValue(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.latesttotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //add filter
  latestaddFilter() {
    this.add_filter = !this.add_filter;
  }

  //table select all---------------------------------------------------------------------------------------------
  latesttoggleSelectAll() {
    this.LASTEST_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  latesthandleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  latesttoggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  latesttogglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  latesthandleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;
  }

  latesthandleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  latesthandleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  latesthandleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  latesthandleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  latesthandleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
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

  // pending

  // table pagination methods------------------------------------------------------------------------------------------------
  get pendingpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.PENDING_DATA.slice(startIndex, endIndex);
  }

  get pendingtotalPages(): number {
    return Math.ceil(this.pendingtotalItems / this.itemsPerPage);
  }

  pendinggetPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.pendingtotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  pendingjumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.pendingtotalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  pendingcalculateMaxValue(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.pendingtotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //add filter
  pendingaddFilter() {
    this.add_filter = !this.add_filter;
  }

  //table select all---------------------------------------------------------------------------------------------
  pendingtoggleSelectAll() {
    this.PENDING_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  pendinghandleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  pendingtoggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  pendingtogglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  pendinghandleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;
  }

  pendinghandleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  pendinghandleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  pendinghandleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  pendinghandleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  pendinghandleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  // post error

  // table pagination methods------------------------------------------------------------------------------------------------
  get posterrorpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.POSTERROR_DATA.slice(startIndex, endIndex);
  }

  get posterrortotalPages(): number {
    return Math.ceil(this.posterrortotalItems / this.itemsPerPage);
  }

  posterrorgetPages(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.posterrortotalPages, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  }

  posterrorjumpToPage(): void {
    if (this.currentPage >= 1 && this.currentPage <= this.posterrortotalPages) {
      // Optional: Add any additional logic before jumping to the page
      // For example, fetching data for the new page

      // Jump to the specified page
      this.currentPage = Number(this.currentPage);
    } else {
      // Handle invalid page number (outside of valid range)
      alert('Invalid page number!');
    }
  }

  posterrorcalculateMaxValue(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.posterrortotalItems
    );
  }

  // ---------------------------------------------------------------------------------------------------

  //add filter
  posterroraddFilter() {
    this.add_filter = !this.add_filter;
  }

  //table select all---------------------------------------------------------------------------------------------
  posterrortoggleSelectAll() {
    this.POSTERROR_DATA.forEach((client) => {
      client.selected = this.selectAll;
    });
  }

  posterrorhandleButtonClick() {
    // Add your button click logic here
    this.panel = !this.panel;
  }

  posterrortoggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  posterrortogglePanelVisibility(clientId: any) {
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  posterrorhandleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;
  }

  posterrorhandleHistoryClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
  }

  posterrorhandleDataUsageClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Data Usage" button click
  }

  posterrorhandleSendPasswordClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Password" button click
  }

  posterrorhandleSendUsernameClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Send Username" button click
  }

  posterrorhandleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }
}
