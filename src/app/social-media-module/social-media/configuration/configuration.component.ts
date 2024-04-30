import { Component } from '@angular/core';
import { SocialMediaServiceService } from '../social-media-service.service';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent {
  fbshowDiv: boolean = false;
  instashowDiv: boolean = false;
  limkedinshowDiv: boolean = false;
  twittershowDiv: boolean = false;

  records = [
    {
      id: 1,
      avatar: '',
      label: '',
      date: '',
      page: [
        {
          id: 1,
          pagename: '',
          pageChecked: false,
        },
        {
          id: 2,
          pagename: '',
          pageChecked: true,
        },
      ],
      isChecked: false,
    },
  ];
  translation: any;

  constructor(
    private socialMediaService: SocialMediaServiceService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.records = this.socialMediaService.records;
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

  toggleSwitch(index: number): void {
    this.records[index].isChecked = !this.records[index].isChecked;
  }

  toggleAdditionalDivfb() {
    this.fbshowDiv = !this.fbshowDiv;
  }

  toggleAdditionalDivinsta() {
    this.instashowDiv = !this.instashowDiv;
  }

  toggleAdditionalDivlinkedin() {
    this.limkedinshowDiv = !this.limkedinshowDiv;
  }

  toggleAdditionalDivtwitter() {
    this.twittershowDiv = !this.twittershowDiv;
  }
}
