import { Component, ElementRef, HostListener } from '@angular/core';
import { CompactType, GridType } from 'angular-gridster2';
import { TranslationService } from '../../Service/translation.service';
import * as Enums from '../../Service/enum.service';
import { Router } from '@angular/router';
import { DashboradService } from './dashborad.service';

interface DashboardItem {
  cols: number;
  rows: number;
  x: number;
  y: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent {
  subcribers: number = 68;
  employees: number = 28;
  clients: number = 40;
  printNewsletter: number = 21;
  emailNewsletter: number = 9;
  unsub: number = 1;
  isEditMode = false;
  graph1toogle!: boolean;
  graph2toogle!: boolean;
  infotoogle!: boolean;
  filetoogle!: boolean;
  learntoogle!: boolean;
  hightoogle!: boolean;
  recentSocialtoogle!: boolean;
  translatedMonthsArr: string[] = [];
  dataImporttoogle!: boolean;
  configurationtoogle!: boolean;
  selectConcepttoogle!: boolean;
  SubcriberCardtoogle!: boolean;
  EmployeeCardtoogle!: boolean;
  ClientCardtoogle!: boolean;
  printedNewsletterCardtoogle!: boolean;
  EmailNewsletterCardtoogle!: boolean;
  UnsubscriberCardtoogle!: boolean;
  // cardtoogle!: boolean;
  isDropdownOpen = false;
  // Create an array to hold the items that are false
  darkmode = false;
  options!: {
    gridType: GridType.ScrollVertical;
    compactType: CompactType.None;
    minCols: number;
    maxCols: number;
    minRows: number;
    minItemRows: number;
    maxItemRows: number;
    defaultItemCols: number;
    defaultItemRows: number;
    swap: boolean;
    pushItems: boolean;
    disablePushOnDrag: boolean;
    disablePushOnResize: boolean;
    pushDirections: {
      north: boolean;
      east: boolean;
      south: boolean;
      west: boolean;
    };
    draggable: {
      enabled: boolean;
    };
    resizable: {
      enabled: boolean;
    };
  };
  subscribercard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 0 }, // First card, top-left
  ];
  employeecard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 5 }, // First card, top-left
  ];
  clientcard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 10 }, // First card, top-left
  ];
  printedNewslettercard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 15 }, // First card, top-left
  ];
  emailNewslettercard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 20 }, // First card, top-left
  ];
  unsubscribercard: DashboardItem[] = [
    { cols: 5, rows: 4, y: 0, x: 25 }, // First card, top-left
  ];
  graph1: DashboardItem[] = [
    { cols: 15, rows: 9, y: 4, x: 0 }, // First card, top-left
  ];
  graph2: DashboardItem[] = [
    { cols: 15, rows: 9, y: 4, x: 15 }, // First card, top-left
  ];
  infomailer: DashboardItem[] = [
    { cols: 11, rows: 9, y: 13, x: 0 }, // First card, top-left
  ];
  file: DashboardItem[] = [
    { cols: 19, rows: 9, y: 13, x: 11 }, // First card, top-left
  ];
  infolearning: DashboardItem[] = [
    { cols: 19, rows: 9, y: 22, x: 0 }, // First card, top-left
  ];
  high: DashboardItem[] = [
    { cols: 11, rows: 9, y: 22, x: 19 }, // First card, top-left
  ];
  recentArticles: DashboardItem[] = [
    { cols: 11, rows: 9, y: 31, x: 0 }, // First card, top-left
  ];
  dataImport: DashboardItem[] = [
    { cols: 19, rows: 9, y: 31, x: 11 }, // First card, top-left
  ];
  configuration: DashboardItem[] = [
    { cols: 13, rows: 9, y: 40, x: 0 }, // First card, top-left
  ];
  selectConcept: DashboardItem[] = [
    { cols: 17, rows: 9, y: 40, x: 13 }, // First card, top-left
  ];
  editModeOn = false;
  selectedMonth!: number;
  selectedWeek!: number;
  months = [
    'CLIENTAPPV2_DASHBOARD_JAN',
    'CLIENTAPPV2_DASHBOARD_FEB',
    'CLIENTAPPV2_DASHBOARD_MAR',
    'CLIENTAPPV2_DASHBOARD_APRIL',
    'CLIENTAPPV2_DASHBOARD_MAY',
    'CLIENTAPPV2_DASHBOARD_JUNE',
    'CLIENTAPPV2_DASHBOARD_JULY',
    'CLIENTAPPV2_DASHBOARD_AUG',
    'CLIENTAPPV2_DASHBOARD_SEP',
    'CLIENTAPPV2_DASHBOARD_OCT',
    'CLIENTAPPV2_DASHBOARD_NOV',
    'CLIENTAPPV2_DASHBOARD_DEC',
  ];
  weeks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5'];
  // clients graph
  openedClientsGraph = [
    0, 276, 310, 212, 240, 156, 98, 165, 210, 287, 144, 190,
  ];
  dileveredClientsGraph = [
    165, 210, 287, 144, 190, 167, 212, 140, 195, 46, 123, 78,
  ];
  sentClientsGraph = [56, 140, 195, 46, 123, 78, 95, 76, 310, 212, 240, 140];
  // employee graph
  openedemployeeGraph = [0, 276, 310, 212, 240];
  dileveredemployeeGraph = [165, 210, 287, 144, 190];
  sentemployeeGraph = [56, 140, 195, 46, 123];
  translation: any;
  toogle = true;
  socialtablelength = 5;
  datatimporttablelength = 5;
  empMonth = 11;
  empYear = 2023;
  isMobile!: boolean;
  dashboarddata = {
    cards: {
      subcribers: 0,
      employees: 0,
      clients: 0,
      printNewsletter: 0,
      emailNewsletter: 0,
      unsub: 0
    },
    clientGrapgh: {
      openedClientsGraph: [0],
      dileveredClientsGraph: [0],
      sentClientsGraph: [0]
    },
    employeeGrapgh: {
      openedemployeeGraph: [0],
      dileveredemployeeGraph: [0],
      sentemployeeGraph: [0],
      empMonth: 0,
      empYear: 0
    },
    dashboardItems: {
      subscribercard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      employeecard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      clientcard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      printedNewslettercard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      emailNewslettercard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      unsubscribercard: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      graph1: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      graph2: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      infomailer: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      file: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      infolearning: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      high: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      recentArticles: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      dataImport: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      configuration: [{ cols: 0, rows: 0, y: 0, x: 0 },],
      selectConcept: [{ cols: 0, rows: 0, y: 0, x: 0 },]
    },
    toggles: {
      graph1toogle: false,
      graph2toogle: false,
      infotoogle: false,
      filetoogle: false,
      learntoogle: false,
      hightoogle: false,
      recentSocialtoogle: false,
      dataImporttoogle: false,
      configurationtoogle: false,
      selectConcepttoogle: false,
      SubcriberCardtoogle: false,
      EmployeeCardtoogle: false,
      ClientCardtoogle: false,
      printedNewsletterCardtoogle: false,
      EmailNewsletterCardtoogle: false,
      UnsubscriberCardtoogle: false
    }
  }

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private el: ElementRef,
    private dashboardService: DashboradService,
  ) {
    this.defaultValues();
  }

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when component is initialized
    setTimeout(() => {
      this.getTranslations();
    }, 200);
    this.dashboarddata = this.dashboardService.dashboarddata;
    this.darkModeCheck();
    this.getGridstarOptions();
    this.reAligin();
    this.getCordinates();
    setTimeout(() => {
      this.getMonthsForG1();
    }, 200);
  }

  ngOnDestroy() {
    this.toogle = false;
  }

  // default values
  defaultValues() {
    // this.cardtoogle = true;
    this.SubcriberCardtoogle = true;
    this.EmployeeCardtoogle = true;
    this.ClientCardtoogle = true;
    this.printedNewsletterCardtoogle = true;
    this.EmailNewsletterCardtoogle = true;
    this.UnsubscriberCardtoogle = true;
    this.graph1toogle = true;
    this.graph2toogle = true;
    this.infotoogle = true;
    this.filetoogle = true;
    this.learntoogle = true;
    this.hightoogle = true;
    this.recentSocialtoogle = true;
    this.dataImporttoogle = true;
    this.configurationtoogle = true;
    this.selectConcepttoogle = true;
    this.selectedMonth = 12;
    this.selectedWeek = 5;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth < 730; // Adjust the threshold as needed

    // If the screen size is not mobile, hide the dropdown
    if (!this.isMobile) {
      // this.showDropdown = false;
      console.log('app window');
    } else {
      // this.showDropdown = true;
      console.log('app mobile');
      this.isMobile = true;
    }
  }

  console(item: any) {
    console.log(item);
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      minCols: 30,
      maxCols: 30,
      minRows: 1,
      minItemRows: 1,
      maxItemRows: 50,
      defaultItemCols: 1,
      defaultItemRows: 1,
      swap: true,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: false, east: true, south: true, west: false },
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false,
      },
    };
    this.editModeOn = false;
  }

  // toogle fuctions --------------------------------------------------------------------------
  SubcriberCardtooglefunc() {
    this.SubcriberCardtoogle = !this.SubcriberCardtoogle;
  }

  EmployeeCardtooglefunc() {
    this.EmployeeCardtoogle = !this.EmployeeCardtoogle;
  }

  ClientCardtooglefunc() {
    this.ClientCardtoogle = !this.ClientCardtoogle;
  }

  printedNewsletterCardtooglefunc() {
    this.printedNewsletterCardtoogle = !this.printedNewsletterCardtoogle;
  }

  EmailNewsletterCardtooglefunc() {
    this.EmailNewsletterCardtoogle = !this.EmailNewsletterCardtoogle;
  }

  UnsubscriberCardtooglefunc() {
    this.UnsubscriberCardtoogle = !this.UnsubscriberCardtoogle;
  }

  graph1tooglefunc() {
    this.graph1toogle = !this.graph1toogle;
    // if (!this.graph1toogle) this.itemsToShow.push('Graph 1');
  }

  graph2tooglefunc() {
    this.graph2toogle = !this.graph2toogle;
    // if (!this.graph2toogle) this.itemsToShow.push('Graph 2');
  }

  infotooglefunc() {
    this.infotoogle = !this.infotoogle;
    // if (!this.infotoogle) this.itemsToShow.push('Info');
  }

  filetooglefunc() {
    this.filetoogle = !this.filetoogle;
    // if (!this.filetoogle) this.itemsToShow.push('File');
  }

  learntooglefunc() {
    this.learntoogle = !this.learntoogle;
    // if (!this.learntoogle) this.itemsToShow.push('Learn');
  }

  hightooglefunc() {
    this.hightoogle = !this.hightoogle;
    // if (!this.hightoogle) this.itemsToShow.push('High');
  }

  recentSocialtooglefunc() {
    this.recentSocialtoogle = !this.recentSocialtoogle;
    // if (!this.recentSocialtoogle) this.itemsToShow.push('Recent Social');
  }

  dataImporttooglefunc() {
    this.dataImporttoogle = !this.dataImporttoogle;
    // if (!this.dataImporttoogle) this.itemsToShow.push('Data Import');
  }

  configurationtooglefunc() {
    this.configurationtoogle = !this.configurationtoogle;
    // if (!this.configurationtoogle) this.itemsToShow.push('Configuration');
  }

  concepttooglefunc() {
    this.selectConcepttoogle = !this.selectConcepttoogle;
    // if (!this.selectConcepttoogle) this.itemsToShow.push('Select Concept');
  }

  // cardtooglefunc() {
  //   debugger;
  //   this.cardtoogle = false;
  //   if (!this.cardtoogle) this.itemsToShow.push('Card');
  // }

  toggleEditoffMode() {
    this.isEditMode = false;
    this.editModeOn = false;
    this.isDropdownOpen = false;
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      minCols: 30,
      maxCols: 30,
      minRows: 1,
      minItemRows: 1,
      maxItemRows: 50,
      defaultItemCols: 1,
      defaultItemRows: 1,
      swap: false,
      pushItems: false,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: false, east: false, south: false, west: false },
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
    };
  }

  // gridstar item change ====================================================================================
  onsubcriberCardItemChange(event: any) {
    const subscribercardupdatedItem = event.item;
    console.log(subscribercardupdatedItem);

    this.subscribercard = [
      {
        cols: 5,
        rows: 4,
        y: subscribercardupdatedItem.y,
        x: subscribercardupdatedItem.x,
      },
    ];
    console.log(
      'subscriberCard',
      subscribercardupdatedItem.y,
      subscribercardupdatedItem.x
    );
    localStorage.setItem('subscriberCard', JSON.stringify(this.subscribercard));
  }

  onEmployeeCardItemChange(event: any) {
    const employeecardupdatedItem = event.item;
    console.log(employeecardupdatedItem);

    this.employeecard = [
      {
        cols: 5,
        rows: 4,
        y: employeecardupdatedItem.y,
        x: employeecardupdatedItem.x,
      },
    ];
    console.log(
      'employeeCard',
      employeecardupdatedItem.y,
      employeecardupdatedItem.x
    );
    localStorage.setItem('employeeCard', JSON.stringify(this.employeecard));
  }

  onClientCardItemChange(event: any) {
    const clientcardupdatedItem = event.item;
    console.log(clientcardupdatedItem);

    this.clientcard = [
      {
        cols: 5,
        rows: 4,
        y: clientcardupdatedItem.y,
        x: clientcardupdatedItem.x,
      },
    ];
    console.log('clientCard', clientcardupdatedItem.y, clientcardupdatedItem.x);
    localStorage.setItem('clientCard', JSON.stringify(this.clientcard));
  }

  onPrintedNewsletterCardItemChange(event: any) {
    const printedNewslettercardcardupdatedItem = event.item;
    console.log(printedNewslettercardcardupdatedItem);

    this.printedNewslettercard = [
      {
        cols: 5,
        rows: 4,
        y: printedNewslettercardcardupdatedItem.y,
        x: printedNewslettercardcardupdatedItem.x,
      },
    ];
    console.log(
      'printedNewsletterCard',
      printedNewslettercardcardupdatedItem.y,
      printedNewslettercardcardupdatedItem.x
    );
    localStorage.setItem(
      'printedNewsletterCard',
      JSON.stringify(this.printedNewslettercard)
    );
  }

  onEmailNewsletterCardItemChange(event: any) {
    const emailNewslettercardcardupdatedItem = event.item;
    console.log(emailNewslettercardcardupdatedItem);

    this.emailNewslettercard = [
      {
        cols: 5,
        rows: 4,
        y: emailNewslettercardcardupdatedItem.y,
        x: emailNewslettercardcardupdatedItem.x,
      },
    ];
    console.log(
      'emailNewsletterCard',
      emailNewslettercardcardupdatedItem.y,
      emailNewslettercardcardupdatedItem.x
    );
    localStorage.setItem(
      'emailNewsletterCard',
      JSON.stringify(this.emailNewslettercard)
    );
  }

  onunsubscriberCardItemChange(event: any) {
    const unscribercardcardupdatedItem = event.item;
    console.log(unscribercardcardupdatedItem);

    this.unsubscribercard = [
      {
        cols: 5,
        rows: 4,
        y: unscribercardcardupdatedItem.y,
        x: unscribercardcardupdatedItem.x,
      },
    ];
    console.log(
      'unsubscriberCard',
      unscribercardcardupdatedItem.y,
      unscribercardcardupdatedItem.x
    );
    localStorage.setItem(
      'unsubscriberCard',
      JSON.stringify(this.unsubscribercard)
    );
  }

  ongraph1ItemChange(event: any) {
    const g1updatedItem = event.item;
    console.log(g1updatedItem);

    this.graph1 = [
      { cols: 15, rows: 9, y: g1updatedItem.y, x: g1updatedItem.x },
    ];
    console.log('graph 1', g1updatedItem.y, g1updatedItem.x);
    localStorage.setItem('graph', JSON.stringify(this.graph1));
  }

  ongraph2ItemChange(event: any) {
    const g2updatedItem = event.item;
    console.log(g2updatedItem);

    this.graph2 = [
      { cols: 15, rows: 9, y: g2updatedItem.y, x: g2updatedItem.x },
    ];
    console.log('grapgh 2', g2updatedItem.y, g2updatedItem.x);
    localStorage.setItem('graph2', JSON.stringify(this.graph2));
  }

  oninfomailerItemChange(event: any) {
    const mailerupdatedItem = event.item;
    console.log(mailerupdatedItem);

    this.infomailer = [
      { cols: 11, rows: 9, y: mailerupdatedItem.y, x: mailerupdatedItem.x },
    ];
    console.log('mailer', mailerupdatedItem.y, mailerupdatedItem.x);
    localStorage.setItem('infomailer', JSON.stringify(this.infomailer));
  }

  onfileItemChange(event: any) {
    const fileupdatedItem = event.item;
    console.log(fileupdatedItem);

    this.file = [
      { cols: 19, rows: 9, y: fileupdatedItem.y, x: fileupdatedItem.x },
    ];
    console.log('file', fileupdatedItem.y, fileupdatedItem.x);
    localStorage.setItem('file', JSON.stringify(this.file));
  }

  oninfolearningItemChange(event: any) {
    const learnupdatedItem = event.item;
    console.log(learnupdatedItem);

    this.infolearning = [
      { cols: 19, rows: 9, y: learnupdatedItem.y, x: learnupdatedItem.x },
    ];
    console.log('learning', learnupdatedItem.y, learnupdatedItem.x);
    localStorage.setItem('infolearning', JSON.stringify(this.infolearning));
  }

  onhighItemChange(event: any) {
    const highupdatedItem = event.item;
    console.log(highupdatedItem);

    this.high = [
      { cols: 11, rows: 9, y: highupdatedItem.y, x: highupdatedItem.x },
    ];
    console.log('high', highupdatedItem.y, highupdatedItem.x);
    localStorage.setItem('high', JSON.stringify(this.high));
  }

  onrecentArticlesItemChange(event: any) {
    const recentArticlesupdatedItem = event.item;
    console.log(recentArticlesupdatedItem);

    this.recentArticles = [
      {
        cols: 11,
        rows: 9,
        y: recentArticlesupdatedItem.y,
        x: recentArticlesupdatedItem.x,
      },
    ];
    console.log(
      'recent Articles',
      recentArticlesupdatedItem.y,
      recentArticlesupdatedItem.x
    );
    localStorage.setItem('Recent Social', JSON.stringify(this.recentArticles));
  }

  onconfigurationItemChange(event: any) {
    const configurationupdatedItem = event.item;
    console.log(configurationupdatedItem);

    this.configuration = [
      {
        cols: 13,
        rows: 9,
        y: configurationupdatedItem.y,
        x: configurationupdatedItem.x,
      },
    ];
    console.log(
      'configuration',
      configurationupdatedItem.y,
      configurationupdatedItem.x
    );
    localStorage.setItem('Configuration', JSON.stringify(this.configuration));
  }

  ondataImportItemChange(event: any) {
    const dataImportupdatedItem = event.item;
    console.log(dataImportupdatedItem);

    this.dataImport = [
      {
        cols: 19,
        rows: 9,
        y: dataImportupdatedItem.y,
        x: dataImportupdatedItem.x,
      },
    ];
    console.log(
      'data Import',
      dataImportupdatedItem.y,
      dataImportupdatedItem.x
    );
    localStorage.setItem('Data Import', JSON.stringify(this.dataImport));
  }

  onselectConceptItemChange(event: any) {
    const selectConceptupdatedItem = event.item;
    console.log(selectConceptupdatedItem);

    this.selectConcept = [
      {
        cols: 17,
        rows: 9,
        y: selectConceptupdatedItem.y,
        x: selectConceptupdatedItem.x,
      },
    ];
    console.log(
      'select Concept',
      selectConceptupdatedItem.y,
      selectConceptupdatedItem.x
    );
    localStorage.setItem('Select Concept', JSON.stringify(this.selectConcept));
  }

  // reset gridstar item values -------------------------------------------------------
  reset() {
    localStorage.removeItem('subscriberCard');
    localStorage.removeItem('employeeCard');
    localStorage.removeItem('clientCard');
    localStorage.removeItem('printedNewsletterCard');
    localStorage.removeItem('emailNewsletterCard');
    localStorage.removeItem('unsubscriberCard');
    localStorage.removeItem('graph');
    localStorage.removeItem('graph2');
    localStorage.removeItem('infomailer');
    localStorage.removeItem('file');
    localStorage.removeItem('infolearning');
    localStorage.removeItem('high');
    localStorage.removeItem('Recent Social');
    localStorage.removeItem('Data Import');
    localStorage.removeItem('Configuration');
    localStorage.removeItem('Select Concept');

    setTimeout(() => {
      this.reAligin();
    }, 50);
  }

  reAligin() {
    this.subscribercard = [
      { cols: 5, rows: 4, y: 0, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('subscriberCard', JSON.stringify(this.subscribercard));

    this.employeecard = [
      { cols: 5, rows: 4, y: 0, x: 5 }, // First card, top-left
    ];
    localStorage.setItem('employeeCard', JSON.stringify(this.employeecard));

    this.clientcard = [
      { cols: 5, rows: 4, y: 0, x: 10 }, // First card, top-left
    ];
    localStorage.setItem('clientCard', JSON.stringify(this.clientcard));

    this.printedNewslettercard = [
      { cols: 5, rows: 4, y: 0, x: 15 }, // First card, top-left
    ];
    localStorage.setItem(
      'printedNewsletterCard',
      JSON.stringify(this.printedNewslettercard)
    );

    this.emailNewslettercard = [
      { cols: 5, rows: 4, y: 0, x: 20 }, // First card, top-left
    ];
    localStorage.setItem(
      'emailNewsletterCard',
      JSON.stringify(this.emailNewslettercard)
    );

    this.unsubscribercard = [
      { cols: 5, rows: 4, y: 0, x: 25 }, // First card, top-left
    ];
    localStorage.setItem(
      'unsubscriberCard',
      JSON.stringify(this.unsubscribercard)
    );

    this.graph1 = [
      { cols: 15, rows: 9, y: 4, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('graph', JSON.stringify(this.graph1));

    this.graph2 = [
      { cols: 15, rows: 9, y: 4, x: 15 }, // First card, top-left
    ];
    localStorage.setItem('graph2', JSON.stringify(this.graph2));

    this.infomailer = [
      { cols: 11, rows: 9, y: 13, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('infomailer', JSON.stringify(this.infomailer));

    this.file = [
      { cols: 19, rows: 9, y: 13, x: 11 }, // First card, top-left
    ];
    localStorage.setItem('file', JSON.stringify(this.file));

    this.infolearning = [
      { cols: 19, rows: 9, y: 22, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('infolearning', JSON.stringify(this.infolearning));

    this.high = [
      { cols: 11, rows: 9, y: 22, x: 19 }, // First card, top-left
    ];
    localStorage.setItem('high', JSON.stringify(this.high));

    this.recentArticles = [
      { cols: 11, rows: 9, y: 31, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('Recent Social', JSON.stringify(this.recentArticles));

    this.dataImport = [
      { cols: 19, rows: 9, y: 31, x: 11 }, // First card, top-left
    ];
    localStorage.setItem('Data Import', JSON.stringify(this.dataImport));

    this.configuration = [
      { cols: 13, rows: 9, y: 40, x: 0 }, // First card, top-left
    ];
    localStorage.setItem('Configuration', JSON.stringify(this.configuration));

    this.selectConcept = [
      { cols: 17, rows: 9, y: 40, x: 13 }, // First card, top-left
    ];
    localStorage.setItem('Select Concept', JSON.stringify(this.selectConcept));

    this.defaultValues();
  }

  // translations for dropdown ---------------------------------------------------------------
  getTranslationForMonths(transKey: string) {
    if (this.translation) {
      let objArr = Object.entries(this.translation).find(
        ([key, val]) => key === transKey
      );
      return objArr ? (objArr[1] as string) : '';
    }

    return '';
  }

  getCordinates() {
    const subscribecordinate = localStorage.getItem('subscriberCard');
    const employeecordinate = localStorage.getItem('employeeCard');
    const clientcordinate = localStorage.getItem('clientCard');
    const printedNewslettercordinate = localStorage.getItem(
      'printedNewsletterCard'
    );
    const emailNewslettercordinate = localStorage.getItem(
      'emailNewsletterCard'
    );
    const unsubscribercordinate = localStorage.getItem('unsubscriberCard');
    const graphcordinate = localStorage.getItem('graph');
    const graph2cordinate = localStorage.getItem('graph2');
    const infomailercordinate = localStorage.getItem('infomailer');
    const filecordinate = localStorage.getItem('file');
    const infolearningcordinate = localStorage.getItem('infolearning');
    const highcordinate = localStorage.getItem('high');
    const recentSocialcordinate = localStorage.getItem('Recent Social');
    const dataImportcordinate = localStorage.getItem('Data Import');
    const configuratiomcordinate = localStorage.getItem('Configuration');
    const selectConceptcordinate = localStorage.getItem('Select Concept');

    if (subscribecordinate) {
      this.subscribercard = JSON.parse(subscribecordinate);
    }
    if (employeecordinate) {
      this.employeecard = JSON.parse(employeecordinate);
    }
    if (clientcordinate) {
      this.clientcard = JSON.parse(clientcordinate);
    }
    if (printedNewslettercordinate) {
      this.printedNewslettercard = JSON.parse(printedNewslettercordinate);
    }
    if (emailNewslettercordinate) {
      this.emailNewslettercard = JSON.parse(emailNewslettercordinate);
    }
    if (unsubscribercordinate) {
      this.unsubscribercard = JSON.parse(unsubscribercordinate);
    }
    if (graphcordinate) {
      this.graph1 = JSON.parse(graphcordinate);
    }
    if (graph2cordinate) {
      this.graph2 = JSON.parse(graph2cordinate);
    }
    if (infomailercordinate) {
      this.infomailer = JSON.parse(infomailercordinate);
    }
    if (filecordinate) {
      this.file = JSON.parse(filecordinate);
    }
    if (infolearningcordinate) {
      this.infolearning = JSON.parse(infolearningcordinate);
    }
    if (highcordinate) {
      this.high = JSON.parse(highcordinate);
    }
    if (recentSocialcordinate) {
      this.recentArticles = JSON.parse(recentSocialcordinate);
    }
    if (dataImportcordinate) {
      this.dataImport = JSON.parse(dataImportcordinate);
    }
    if (configuratiomcordinate) {
      this.configuration = JSON.parse(configuratiomcordinate);
    }
    if (selectConceptcordinate) {
      this.selectConcept = JSON.parse(selectConceptcordinate);
    }
  }

  darkModeCheck() {
    const storedDarkMode = localStorage.getItem('darkmode');

    if (storedDarkMode == 'dark') {
      this.darkmode = true;
    } else {
      this.darkmode = false;
    }
  }

  getGridstarOptions() {
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      minCols: 30,
      maxCols: 30,
      minRows: 1,
      minItemRows: 1,
      maxItemRows: 50,
      defaultItemCols: 1,
      defaultItemRows: 1,
      swap: false,
      pushItems: false,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: false, east: false, south: false, west: false },
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
    };
  }

  getMonthsForG1() {
    this.translatedMonthsArr = this.months.map((x) => {
      return this.getTranslationForMonths(x);
    });
  }

  routeToSelectConcept() {
    if (this.isEditMode == false) {
      this.router.navigate(['manage_content/select_concept']);
    }
  }

  routeToSocialMedia() {
    if (this.isEditMode == false) {
      this.router.navigate(['social_media']);
    }
  }

  routeToDataImport() {
    if (this.isEditMode == false) {
      this.router.navigate(['manage_users/data_import']);
    }
  }

  routeToConfiguration() {
    if (this.isEditMode == false) {
      this.router.navigate(['social_media/configuration']);
    }
  }

  propertyFalse() {
    this.isDropdownOpen = false;
    this.editModeOn = false;
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
    this.editModeOn = false;
  }
  openPopUpById(popUpName: any) {
    this.editModeOn = false;
    this.isDropdownOpen = false;
    if (popUpName == 'edit') {
      this.editModeOn = true;
    } else if (popUpName == 'add') {
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

  routeToClient() {
    this.router.navigate(['manage_users/search_clients']);
  }

  routeToEmployee() {
    this.router.navigate(['manage_users/search_emp']);
  }

  routeToUnSubscribers() {
    this.router.navigate(['manage_users/unsubcribed_users']);
  }
}
