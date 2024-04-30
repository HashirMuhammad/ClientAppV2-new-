import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Enums from '../../../Service/enum.service';
import { TranslationService } from 'src/app/Service/translation.service';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css'],
})
export class ViewArticlesComponent {
  ARTICLE_DATA = [
    {
      articletId: 1,
      imgUrl: '',
      title: 'account and legal firms',
      arcticles:
        'very utility class in Tailwind can be very utility class in Tailwind can be very utility class in Tailwind can be very utility class in Tailwind can be',
      published_date: '06/11/2023',
    },
  ];
  translation: any;
  textToogle = false;
  articletId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService
  ) {
    this.route.params.subscribe((params) => {
      this.articletId = params['id'];
      // Do something with clientId
      console.log(this.articletId);
    });
  }

  ngOnInit() {
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

  back() {
    this.router.navigate(['manage_content/manage_article']);
  }

  textToogleFunc() {
    this.textToogle = !this.textToogle;
  }

  routeToSimpleArticle() {
    this.router.navigate([`manage_content/simple_artile/${this.articletId}`]);
  }

  routeToAIArticle() {
    this.router.navigate([`manage_content/ai_artile/${this.articletId}`]);
  }
}
