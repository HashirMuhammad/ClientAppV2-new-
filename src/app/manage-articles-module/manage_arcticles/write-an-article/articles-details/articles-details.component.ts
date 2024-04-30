import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css'],
})
export class ArticlesDetailsComponent {
  // profiling inputs
  employeeNewsletterInput!: boolean;
  monthlyNewsletterInput!: boolean;
  printedNewsletterInput!: boolean;
  includeInInput: string = '';
  categoryInput: string = '';
  profilingInput: string = '';
  customerProfilesInput: string = '';
  // newsfeed inputs
  newsfeedInput!: boolean;
  featureThisArticleInput!: boolean;
  selectedOption: string = 'alwaysfeature';
  public value: Date = new Date();
  // social media inputs
  socaialMediaInput!: boolean;
  socaialMediaTitleInput!: string;
  hashtagsInput!: string;
  OptionDate: string = 'pushAfter2Hrs';
  public valuesocial: Date = new Date();
  hourInput: string = '';
  minuteInput: string = '';
  linkedinInput!: boolean;
  pageid = '';
  translation: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit() {
    // Read the state from the activated route
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      this.pageid = page;
      console.log(page); // Check if 'page' is null
    });
    // Now, 'articleId' contains the value passed from the previous component
  }

  discard() {
    this.employeeNewsletterInput = false;
    this.monthlyNewsletterInput = false;
    this.printedNewsletterInput = false;
    this.includeInInput = '';
    this.categoryInput = '';
    this.profilingInput = '';
    this.customerProfilesInput = '';
    this.newsfeedInput = false;
    this.featureThisArticleInput = false;
    this.selectedOption = 'alwaysfeature';
    this.value = new Date();
    this.socaialMediaInput = false;
    this.socaialMediaTitleInput = '';
    this.hashtagsInput = '';
    this.OptionDate = 'pushAfter2Hrs';
    this.valuesocial = new Date();
    this.hourInput = '';
    this.minuteInput = '';
    this.linkedinInput = false;
  }

  // changing component
  routToArtiPreview() {
    const body = [
      this.employeeNewsletterInput,
      this.monthlyNewsletterInput,
      this.printedNewsletterInput,
      this.includeInInput,
      this.categoryInput,
      this.profilingInput,
      this.customerProfilesInput,
      this.newsfeedInput,
      this.featureThisArticleInput,
      this.selectedOption,
      this.value,
      this.socaialMediaInput,
      this.socaialMediaTitleInput,
      this.hashtagsInput,
      this.OptionDate,
      this.valuesocial,
      this.hourInput,
      this.minuteInput,
      this.linkedinInput,
    ];

    console.log(body);
    this.router.navigate(['manage_content/artile_preview']);
  }

  routeback() {
    if (this.pageid == '1') {
      this.router.navigate(['manage_content/simple_artile']);
    } else if (this.pageid == '2') {
      this.router.navigate(['manage_content/ai_artile']);
    } else {
      this.router.navigate(['manage_content/write_an_article']);
    }
  }
}
