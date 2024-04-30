import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-usage',
  templateUrl: './data-usage.component.html',
  styleUrls: ['./data-usage.component.css'],
})
export class DataUsageComponent {
  translation: any;
  DateAddedto = new Date();
  DateAddedfrom = new Date();
  usertoogle = false;
  USER_DATA_EMAIL_NEWSLETTER: any[] = [];
  userId: any;
  userType: any;
  selectedOption = 'Step1'
  CLIENT_EMAIL_NEWSLETTER_DATA = [
    {
      id: 1,
      surname: 'Doe',
      firstName: 'John',
      companyName: 'ABC Inc.',
      emailAddress: 'john.doe@abc.com',
      verfied: 'yes',
    },
  ];
  Employee_EMAIL_NEWSLETTER_DATA = [
    {
      id: 2,
      surname: 'Doe',
      firstName: 'John',
      companyName: 'ABC Inc.',
      emailAddress: 'john.doe@abc.com',
      verfied: 'yes',
    },
  ];
  EMAIL_NEWSLETTER_DATA = [
    {
      sendDate: '01/01/2024',
      concept: 'LC2',
    },
    {
      sendDate: '01/01/2024',
      concept: 'LC2',
    },
    {
      sendDate: '01/01/2024',
      concept: 'LC2',
    },
    {
      sendDate: '01/01/2024',
      concept: 'LC2',
    },
  ];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  INFORMAILER_DATA = [
    {
      date: '01/01/2024',
      campaignSubject: 'test@test.com',
    },
    {
      date: '01/01/2024',
      campaignSubject: 'test@test.com',
    },
    {
      date: '01/01/2024',
      campaignSubject: 'test@test.com',
    },
    {
      date: '01/01/2024',
      campaignSubject: 'test@test.com',
    },
  ];
  DIGIPRINT_DATA = [
    {
      date: '01/01/2024',
      conceptName: 'test@test.com',
    },
    {
      date: '01/01/2024',
      conceptName: 'test@test.com',
    },
    {
      date: '01/01/2024',
      conceptName: 'test@test.com',
    },
    {
      date: '01/01/2024',
      conceptName: 'test@test.com',
    },
  ];

  constructor(
    private translationService: TranslationService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      this.userType = params['type'];

      console.log(this.userId, this.userType);
      // Use userId and userType as needed
    });

    if (this.userType == 'client') {
      this.usertoogle = true;
      this.USER_DATA_EMAIL_NEWSLETTER = this.CLIENT_EMAIL_NEWSLETTER_DATA;
    } else if (this.userType == 'employee') {
      this.usertoogle = false;
      this.USER_DATA_EMAIL_NEWSLETTER = this.Employee_EMAIL_NEWSLETTER_DATA;
    }

    this.totalItems = this.EMAIL_NEWSLETTER_DATA.length;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.dataUsage + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.dataUsage
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.dataUsage + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dataUsage + '_Translations') ?? ''
      );
    }
  }


  back() {
    history.back();
  }

  setActive(buttonNumber: string) {
    this.selectedOption = buttonNumber;
  }

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (this.usertoogle == true) {
      return this.EMAIL_NEWSLETTER_DATA.slice(startIndex, endIndex);
    } else {
      return this.EMAIL_NEWSLETTER_DATA.slice(startIndex, endIndex);
    }
  }

  get InformailerpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (this.usertoogle == true) {
      return this.INFORMAILER_DATA.slice(startIndex, endIndex);
    } else {
      return this.INFORMAILER_DATA.slice(startIndex, endIndex);
    }
  }

  get DigiprintpaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (this.usertoogle == true) {
      return this.DIGIPRINT_DATA.slice(startIndex, endIndex);
    } else {
      return this.DIGIPRINT_DATA.slice(startIndex, endIndex);
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
}
