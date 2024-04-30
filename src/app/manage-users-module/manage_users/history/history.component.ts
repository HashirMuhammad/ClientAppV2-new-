import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class UserHistoryComponent {
  DateAddedto = new Date();
  translation: any;
  selectedOption = '';
  enteredValue = '';
  DateAddedfrom = new Date();
  searchoptions = [
    { value: 'ArticletID', title: 'Articlet ID' },
    { value: 'Concept', title: 'Concept' },
    { value: 'Category', title: 'Category' },
    { value: 'Character', title: 'Character' },
    { value: 'Subject', title: 'Subject' },
    { value: 'Agency', title: 'Agency' },
    { value: 'Qualification', title: 'Qualification' },
    { value: 'Number', title: 'Number' },
    { value: 'Title', title: 'Title' },
    { value: 'SendDate', title: 'Send Date' },
  ];
  ConceptValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  CategoryValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  CharacterValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  SubjectValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  AgencyValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  QualificationValue = [{ value: 'ArticletID', title: 'Articlet ID' }];
  CLIENT_DATA = [
    {
      id: 1,
      surname: 'Doe',
      firstName: 'John',
      companyName: 'ABC Inc.',
      emailAddress: 'john.doe@abc.com',
      verfied: 'yes',
    },
  ];
  Employee_DATA = [
    {
      id: 2,
      surname: 'Doe',
      firstName: 'John',
      companyName: 'ABC Inc.',
      emailAddress: 'john.doe@abc.com',
      verfied: 'yes',
    },
  ];
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  Article_DATA = [
    {
      id: 1,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 2,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 3,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 4,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 5,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 6,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 7,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 8,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 9,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 10,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
    {
      id: 11,
      sendDate: '01/01/2024',
      title:
        'Restriction on supplying temporary agency workers during industrial action',
      category: 'Employment Law',
      concept: 'LC2',
      character: '',
      subject: [''],
      agency: '',
      qualification: '',
      number: '',
      date: '',
    },
  ];
  selectedFilters: { option: string; value: any }[] = [];
  selectedFiltersToogle = false;
  userId: any;
  userType: any;
  usertoogle = false;
  USER_DATA: any[] = [];

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.totalItems = this.Article_DATA.length;
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      this.userType = params['type'];

      console.log(this.userId, this.userType);
      // Use userId and userType as needed
    });

    if (this.userType == 'client') {
      this.usertoogle = true;
      this.USER_DATA = this.CLIENT_DATA;
    } else if (this.userType == 'employee') {
      this.usertoogle = false;
      this.USER_DATA = this.Employee_DATA;
    }
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

  selectedOptionchange() {
    console.log(this.selectedOption);
  }

  clear() {}

  back() {
    history.back();
  }

  handleRowClick(clientId: any) {
    console.log('Clicked on row with clientId:', clientId);
    // Add any other logic you want to perform on row click
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(articleId: any) {
    this.panelid = articleId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(articleId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(articleId);
    this.panel = false;
    this.router.navigate([`manage_content/view_article/${articleId}`]);
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (this.usertoogle == true) {
      return this.Article_DATA.slice(startIndex, endIndex);
    } else {
      return this.Article_DATA.slice(startIndex, endIndex);
    }
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
        this.selectedFiltersToogle = true;
      } else if (this.selectedOption == 'SendDate') {
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
        this.selectedFiltersToogle = true;
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

      if (this.selectedFilters.length < 1) {
        this.selectedFiltersToogle = false;
      }
      this.addFilter();
    }
  }
}
