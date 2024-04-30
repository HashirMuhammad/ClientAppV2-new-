import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ManageContentService } from '../manage-content.service';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-select-concept',
  templateUrl: './select-concept.component.html',
  styleUrls: ['./select-concept.component.css'],
})
export class SelectConceptComponent {
  @Input() DashboardToogle: any;
  @Input() tableLength: any;
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
  USER_DATA = [
    {
      id: 1,
      description: '',
      conceptDate: '',
      sendConceptDate: '',
      conceptType: '',
      selected: false,
    },
  ];
  panel = false;
  panelid = 0;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  translation: any;

  constructor(
    private router: Router,
    private manageContentService: ManageContentService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.USER_DATA = this.manageContentService.USER_DATA;
    this.totalItems = this.USER_DATA.length;
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

  // table pagination methods------------------------------------------------------------------------------------------------
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.USER_DATA.slice(startIndex, endIndex);
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

  //table button panel option---------------------------------------------------------------------------------------------
  togglePanelVisibility(userId: any) {
    this.panelid = userId;
    this.openPopUp(this.panel, 'tablepanel');
  }

  handleEditClick(userId: any) {
    // Implement your logic for handling the "Edit" button click
    console.log(userId);
    this.panel = false;
    this.router.navigate(['manage_content/proof_newsletters']);
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
      setTimeout(() => {
        this.openPopUpById(popUpName);
      }, 10);
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
