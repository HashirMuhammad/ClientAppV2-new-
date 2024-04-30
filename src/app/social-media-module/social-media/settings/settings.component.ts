import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  Linkedinchecked: any;
  Facebookchecked: any;
  Instagramchecked: any;
  Twitterchecked: any;
  Xingchecked:any;
  selectedOption = '';
  Date1 = new Date();
  Date2 = new Date();
  Date3 = new Date();
  Mondaychecked: any;
  Tuesdaychecked: any;
  Fridaychecked: any;
  InstaTitlechecked: any;
  excludeSocialMediaPostschecked: any;
  Wednesdaychecked: any;
  Thursdaychecked: any;
  translation: any;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.socialMedia + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.socialMedia
        )
      ).subscribe((data) => {
        debugger;
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.socialMedia + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.socialMedia + '_Translations') ?? ''
      );
    }
  }

  console() {
    console.log(this.selectedOption);
  }
}
