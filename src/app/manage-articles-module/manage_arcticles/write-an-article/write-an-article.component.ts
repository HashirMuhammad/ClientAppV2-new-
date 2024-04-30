import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-write-an-article',
  templateUrl: './write-an-article.component.html',
  styleUrls: ['./write-an-article.component.css'],
})
export class WriteAnArticleComponent {
  selectedOption: string = 'writeArticle';
  translation: any;

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.writeAnArticle + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.writeAnArticle
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.writeAnArticle + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.writeAnArticle + '_Translations') ??
          ''
      );
    }
  }

  // receivedValue: string = '';
  // aireceivedValue: string = '';
  // detailreceivedValue: string = '';

  // receiveValue(value: string) {
  //   console.log('receiveValue');
  //   this.receivedValue = value;
  //   if (this.receivedValue === 'false') {
  //     console.log(this.receivedValue);
  //     this.art = '';
  //     this.aireceivedValue = '';
  //     this.detailreceivedValue = '';
  //     console.log(this.art);
  //   }
  // }

  // aireceiveValue(value: string) {
  //   console.log('aireceiveValue');
  //   this.aireceivedValue = value;
  //   if (this.aireceivedValue === 'ai_art') {
  //     console.log(this.aireceivedValue);
  //     this.art = '';
  //     this.receivedValue = '';
  //     this.detailreceivedValue = '';
  //     console.log(this.art);
  //   }
  // }

  // detailreceiveValue(value: string) {
  //   console.log('detailreceiveValue');
  //   this.detailreceivedValue = value;
  //   if (this.detailreceivedValue === 'false') {
  //     console.log(this.detailreceivedValue);
  //     this.art = '';
  //     this.receivedValue = '';
  //     this.aireceivedValue = '';
  //     console.log(this.art);
  //   }
  // }

  optionSelect(option: string) {
    switch (option) {
      case '1':
        this.selectedOption = 'writeArticle';
        break;
      case '2':
        this.selectedOption = 'generateAI';
        break;

      default:
        break;
    }
  }

  onCancelClick() {
    this.selectedOption = 'writeArticle';
  }

  onNextClick() {
    console.log('Selected Option:', this.selectedOption);
    if (this.selectedOption == 'writeArticle') {
      this.router.navigate(['manage_content/simple_artile']);
    } else if (this.selectedOption == 'generateAI') {
      this.router.navigate(['manage_content/ai_artile']);
    } else {
    }
    // Add any additional logic you want to perform when "Next" is clicked
  }
}
