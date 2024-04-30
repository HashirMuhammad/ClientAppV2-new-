import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManageContentService } from '../manage-content.service';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.css'],
})
export class ManageArticlesComponent {
  public valuedate: Date = new Date();
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
  CLIENT_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles: '',
      published_date: '',
      newsfeed: '',
      type: '',
      selected: false,
    },
  ];
  selectAll = false;
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  searchInput: string = '';
  agencyInput: string = '';
  dateInput: boolean = true;
  translation: any;

  constructor(
    private router: Router,
    private manageContentService: ManageContentService,
    private translationService: TranslationService
  ) {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.manageArticle + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.manageArticle
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.manageArticle + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.manageArticle + '_Translations') ??
          ''
      );
    }
  }

  ngOnInit() {
    this.CLIENT_DATA = this.manageContentService.CLIENT_DATA;
    this.totalItems = this.CLIENT_DATA.length;
  }

  clear() {
    this.searchInput = '';
    this.agencyInput = '';
    this.dateInput = true;
    this.valuedate = new Date();
  }

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

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index, ':', this.isChecked[index]);
  }

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(clientId: any) {
    debugger;
    this.panelid = clientId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(clientId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(clientId);
    this.panel = false;

    this.router.navigate([`manage_content/simple_artile/${clientId}`]);
  }

  handleViewArticleClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "History" button click
    // this.router.navigate([`manage_content/view_article/${clientId}`]);
    this.router.navigate(['manage_content/view_article', clientId]);
  }

  handleEditWithAIClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    this.router.navigate([`manage_content/ai_artile/${clientId}`]);

    // Implement your logic for handling the "Data Usage" button click
  }

  handleDeleteClick(clientId: any) {
    console.log(clientId);
    this.panel = false;

    // Implement your logic for handling the "Delete" button click
  }

  // status styling-------------------------------------------------------
  getStatusStyle(status: string) {
    if (status === 'own') {
      return {
        'background-color': '#EBF5FF',
        color: '#3399FF',
        'padding-left': '10px',
        'padding-right': '10px',
        'padding-top': '3px',
        'padding-bottom': '4px',
        'border-radius': '10px',
      };
    } else if (status === 'modified') {
      return {
        'background-color': '#FFF6D7',
        color: '#FFBF00',
        'padding-left': '10px',
        'padding-right': '10px',
        'padding-top': '3px',
        'padding-bottom': '4px',
        'border-radius': '10px',
      };
    } else {
      return {}; // Return an empty object for default styling
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
