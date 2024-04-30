import { Component } from '@angular/core';
import { ReportsServiceService } from './reports-service.service';
import { TranslationService } from '../../Service/translation.service';
import * as Enums from '../../Service/enum.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {
  lastUpdated = '2023-12-29T00:51:07:25';
  emailSubject = 'client subject';
  userType = 'clients';
  enteredValue = 'Select';
  // tabs
  OverviewTabBool = true;
  ArticlestabBool = false;
  SenttabBool = false;
  ClickstabBool = false;
  StatustabBool = false;
  FailedtabBool = false;
  UnsubscribedtabBool = false;
  CallBacktabBool = false;
  // Sent tab
  SentTotabBool = true;
  DileveredtabBool = false;
  OpenedtabBool = false;
  // Click tab
  UniqueClicktabBool = true;
  UniqueUserclicktabBool = false;
  // status tab
  BouncedtabBool = true;
  UnopenedtabBool = false;

  // clients data ----------------------------------------------------------------------------------
  ClientOverview = {
    ClientSent: 0,
    ClientDileverd: 0,
    ClientOpened: 0,
    ClientUniqueclicks: 0,
    ClientUniqueUserclicks: 0,
    ClientBounced: 0,
    ClientFailed: 0,
    ClientUnsubcribed: 0,
    ClientOpenRate: 0,
    ClientclickRate: 0,
    ClientSuccessfuldileveries: '',
    ClientTotalClicks: 0,
    ClientLastOpened: '',
    ClientLastClicked: '',
    ClientLastUpdated: '',
  };
  NoofReports = 0;
  Category = [{ title: '', data: [0, 0, 0, 0, 0, 0] }];
  NewCategory = [{ title: '', data: [0, 0, 0, 0, 0, 0] }];
  categories = [
    'Sent',
    'Dilevered',
    'Opened',
    'Not Opened',
    'Unique Clicks',
    'Unsubscribe',
  ]; // Replace with your actual categories
  StatisticsToogle = false;
  ClickRateToogle = false;
  CategoryClickRate = [{ title: '', data: [0] }];
  NewCategoryClickRate = [{ title: '', data: [0] }];
  SearchInput: any;
  articleData = [
    {
      id: 0,
      title: '',
      description: '',
      receieved: 0,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
  ];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  // Sent
  SentToData = [{ id: 0, email: '' }];
  SentToInput = '';
  DileveredData = [{ id: 0, email: '' }];
  DileveredInput = '';
  OpenedData = [{ id: 0, email: '', lastOpened: '', count: 0 }];
  OpenedInput = '';
  // clicks
  UniqueClicksData = [
    {
      id: 0,
      articleTitle: '',
      email: '',
      lastClicked: '',
      count: 0,
    },
  ];
  UniqueClicksInput = '';
  UniqueUserClicksData = [{ id: 0, email: '', lastClicked: '', count: 0 }];
  UniqueUserClicksInput = '';
  // Status
  BouncedData = [
    {
      id: 0,
      email: '',
      Subject: '',
      type: '',
      Description: '',
    },
  ];
  BouncedInput = '';
  BouncesHeaderData = {
    totalBounces: 0,
    SoftBounces: 0,
    HardBounces: 0,
    Others: 0,
  };
  UnopenedData = [{ id: 0, email: '' }];
  UnopenedInput = '';
  FailedData = [{ id: 0, email: '', message: '' }];
  FailedInput = '';
  UnsubscribedData = [{ id: 0, email: '', date: '' }];
  UnsubscribedInput = '';
  CallBackData = [
    {
      id: 0,
      articleTitle: '',
      firstName: '',
      surName: '',
      email: '',
      date: '',
    },
  ];
  CallBackInput = '';
  translation: any;

  constructor(
    private reportsService: ReportsServiceService,
    private translationService: TranslationService
  ) {
    // this.OverviewTabBool = true;
    this.StatisticsToogle = true;
    this.GetClientData();
    this.totalItems = this.articleData.length;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.reports + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(Enums.pageName.reports)
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.reports + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.reports + '_Translations') ?? ''
      );
    }
  }

  setActive(buttonNumber: string) {
    this.userType = buttonNumber;
    console.log(this.userType, buttonNumber);
    if (this.userType == 'clients') {
      this.GetClientData();
    } else if (this.userType == 'employees') {
      this.GetEmployeesData();
    } else {
      this.GetClientData();
    }
  }

  GetClientData() {
    this.ClientOverview = this.reportsService.ClientOverview;
    this.Category = this.reportsService.Category;
    this.CategoryClickRate = this.reportsService.CategoryClickRate;
    this.articleData = this.reportsService.articleData;
    this.SentToData = this.reportsService.SentToData;
    this.DileveredData = this.reportsService.DileveredData;
    this.OpenedData = this.reportsService.OpenedData;
    this.UniqueClicksData = this.reportsService.UniqueClicksData;
    this.UniqueUserClicksData = this.reportsService.UniqueUserClicksData;
    this.BouncedData = this.reportsService.BouncedData;
    this.BouncesHeaderData = this.reportsService.BouncesHeaderData;
    this.UnopenedData = this.reportsService.UnopenedData;
    this.FailedData = this.reportsService.FailedData;
    this.UnsubscribedData = this.reportsService.UnsubscribedData;
    this.CallBackData = this.reportsService.CallBackData;
  }

  GetEmployeesData() {
    this.ClientOverview = this.reportsService.EmployeeOverview;
    this.Category = this.reportsService.EmployeeCategory;
    this.CategoryClickRate = this.reportsService.EmployeeCategoryClickRate;
    this.articleData = this.reportsService.EmployeearticleData;
    this.SentToData = this.reportsService.EmployeeSentToData;
    this.DileveredData = this.reportsService.EmployeeDileveredData;
    this.OpenedData = this.reportsService.EmployeeOpenedData;
    this.UniqueClicksData = this.reportsService.EmployeeUniqueClicksData;
    this.UniqueUserClicksData =
      this.reportsService.EmployeeUniqueUserClicksData;
    this.BouncedData = this.reportsService.EmployeeBouncedData;
    this.BouncesHeaderData = this.reportsService.EmployeeBouncesHeaderData;
    this.UnopenedData = this.reportsService.EmployeeUnopenedData;
    this.FailedData = this.reportsService.EmployeeFailedData;
    this.UnsubscribedData = this.reportsService.EmployeeUnsubscribedData;
    this.CallBackData = this.reportsService.EmployeeCallBackData;
  }

  AllTabsFalse() {
    debugger;
    this.OverviewTabBool = false;
    this.ArticlestabBool = false;
    this.SenttabBool = false;
    this.ClickstabBool = false;
    this.StatustabBool = false;
    this.FailedtabBool = false;
    this.UnsubscribedtabBool = false;
    this.CallBacktabBool = false;
    // Sent tab
    this.SentTotabBool = false;
    this.DileveredtabBool = false;
    this.OpenedtabBool = false;
    // Click tab
    this.UniqueClicktabBool = false;
    this.UniqueUserclicktabBool = false;
    // status tab
    this.BouncedtabBool = false;
    this.UnopenedtabBool = false;
  }

  Changetab(tab: string) {
    debugger;
    this.AllTabsFalse();

    switch (tab) {
      case 'sento':
        this.SenttabBool = true;
        this.SentTotabBool = true;
        break;
      case 'Dilevered':
        this.SenttabBool = true;
        this.DileveredtabBool = true;
        break;
      case 'opened':
        this.SenttabBool = true;
        this.OpenedtabBool = true;
        break;
      case 'UniqueClicks':
        this.ClickstabBool = true;
        this.UniqueClicktabBool = true;
        break;
      case 'UniqueUserClicks':
        this.ClickstabBool = true;
        this.UniqueUserclicktabBool = true;
        break;
      case 'Bounced':
        this.StatustabBool = true;
        this.BouncedtabBool = true;
        break;
      case 'Failed':
        this.FailedtabBool = true;
        break;
      case 'Unsubscribed':
        this.UnsubscribedtabBool = true;
        break;

      default:
        this.OverviewTabBool = true;
        break;
    }
  }

  generateCategories(): void {
    const numberOfReports = this.NoofReports || 0; // Use 0 if NoofReports is falsy
    this.NewCategory = this.Category.slice(0, numberOfReports);
    this.NewCategoryClickRate = this.CategoryClickRate.slice(
      0,
      numberOfReports
    );
  }

  StatisticsToogleOn() {
    this.ClickRateToogle = false;
    this.StatisticsToogle = true;
  }

  ClickRateToogleOn() {
    this.StatisticsToogle = false;
    this.ClickRateToogle = true;
  }

  // article
  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articleData.slice(startIndex, endIndex);
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

  handleRowClick(articleid: any) {
    console.log('Clicked on row with article Id:', articleid);
    // Add any other logic you want to perform on row click
  }

  sendTab(str: string) {
    console.log(str);
  }

  get paginatedSendToData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.SentToData.slice(startIndex, endIndex);
  }

  get paginatedDileveredData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.DileveredData.slice(startIndex, endIndex);
  }

  get paginatedOpenedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.OpenedData.slice(startIndex, endIndex);
  }

  get paginatedUniqueClicksData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.UniqueClicksData.slice(startIndex, endIndex);
  }

  get paginatedUniqueUserClicksData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.UniqueUserClicksData.slice(startIndex, endIndex);
  }

  get paginatedBouncedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.BouncedData.slice(startIndex, endIndex);
  }

  get paginatedUnopenedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.UnopenedData.slice(startIndex, endIndex);
  }

  get paginatedFailedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.FailedData.slice(startIndex, endIndex);
  }

  get paginatedUnsubscribedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.UnsubscribedData.slice(startIndex, endIndex);
  }

  get paginatedCallBackData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.CallBackData.slice(startIndex, endIndex);
  }
}
