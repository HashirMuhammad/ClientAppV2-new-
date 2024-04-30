import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

@Component({
  selector: 'app-ai-article',
  templateUrl: './ai-article.component.html',
  styleUrls: ['./ai-article.component.css'],
})
export class AiArticleComponent {
  // editor value
  public value: string = '../../../assets/manage_content/pic.png';
  artTitleInput!: string;
  noOfWordInput!: string;
  FocusKeywordsInput!: string;
  pageRoute = '2';
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

  routToArtiDetail() {
    // sending to service
    const body = [
      this.artTitleInput,
      this.noOfWordInput,
      this.FocusKeywordsInput,
      this.value,
    ];

    console.log(body);

    this.router.navigate(['manage_content/artile_details'], {
      queryParams: { page: this.pageRoute },
    });
  }

  discard() {
    this.artTitleInput = '';
    this.noOfWordInput = '';
    this.FocusKeywordsInput = '';
    this.value = '';
  }

  routeToWriteAnArticle() {
    // history.back();
    this.router.navigate(['manage_content/write_an_article']);
  }
}
