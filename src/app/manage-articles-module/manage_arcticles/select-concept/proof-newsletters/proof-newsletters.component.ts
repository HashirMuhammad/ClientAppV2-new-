import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

interface Article {
  articleId: number;
  imgUrl: string;
  arcticles: string;
}

@Component({
  selector: 'app-proof-newsletters',
  templateUrl: './proof-newsletters.component.html',
  styleUrls: ['./proof-newsletters.component.css'],
})
export class ProofNewslettersComponent {
  selectedOption: string = 'Step1';
  ProfileId = [
    { profileid: 1 },
    { profileid: 2 },
    { profileid: 3 },
    { profileid: 4 },
    { profileid: 5 },
    { profileid: 6 },
    { profileid: 7 },
    { profileid: 8 },
    { profileid: 9 },
    { profileid: 10 },
    { profileid: 11 },
    { profileid: 12 },
    { profileid: 13 },
    { profileid: 14 },
    { profileid: 15 },
  ];
  Articles: Article[] = [
    {
      articleId: 1,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'very utility class in Tailwind can be ',
    },
    {
      articleId: 2,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'Here’s a simple example of a marketing',
    },
    {
      articleId: 3,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'very utility class in Tailwind can be',
    },
    {
      articleId: 4,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'Here’s a simple example of a marketing',
    },
    {
      articleId: 5,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'very utility class in Tailwind can be',
    },
    {
      articleId: 6,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'Here’s a simple example of a marketing',
    },
    {
      articleId: 7,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'Here’s a simple example of a marketing',
    },
    {
      articleId: 8,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'Here’s a simple example of a marketing',
    },
    {
      articleId: 9,
      imgUrl: '../../../../assets/history/Avatar.png',
      arcticles: 'very utility class in Tailwind can be',
    },
    // Add more client data as needed
  ];

  includeList: Article[] = [];
  excludeList: Article[] = [];
  // Articles: Article[] = [/* Your articles data here */];
  CLIENT_DATA = [
    {
      clientId: 1,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 2,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 3,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 4,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 5,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 6,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 7,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 8,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 9,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
    {
      clientId: 10,
      Name: 'goldberg',
      EmailAddress: 'goldberg@gmail.com',
      CompanyName: 'Gold Bar',
    },
  ];
  selectAll = false;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.CLIENT_DATA.length;
  translation: any;

  constructor(private translationService: TranslationService) {
    this.includeList = this.Articles;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.selectConcept + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.selectConcept
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.selectConcept + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.selectConcept + '_Translations') ??
          ''
      );
    }
  }

  moveToExcludeList(article: Article) {
    // Remove from includeList
    this.includeList = this.includeList.filter((a) => a !== article);

    // Add to excludeList
    this.excludeList.push(article);
  }

  moveToIncludeList(article: Article) {
    // Remove from excludeList
    this.excludeList = this.excludeList.filter((a) => a !== article);

    // Add to includeList
    this.includeList.push(article);
  }

  setActive(buttonNumber: string) {
    this.selectedOption = buttonNumber;
  }

  // step 2
  onCheckboxChange(articleId: number, profileId: number) {
    console.log(
      `Checkbox for Article ID ${articleId} and Profile ID ${profileId} is selected.`
    );
  }

  // step 3
  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.CLIENT_DATA.slice(startIndex, endIndex);
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
