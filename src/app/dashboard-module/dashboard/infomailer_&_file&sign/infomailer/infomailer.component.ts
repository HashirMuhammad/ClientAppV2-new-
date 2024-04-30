import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';
import { DashboradService } from '../../dashborad.service';

@Component({
  selector: 'app-infomailer',
  templateUrl: './infomailer.component.html',
  styleUrls: ['./infomailer.component.css'],
})
export class InfomailerComponent {
  translation: any;
  informailerData = [
    {
      imgSrc: "",
      campaignName: "",
      dateTime: "",
      statusLabel: {
        text: "",
        backgroundColor: "",
        textColor: ""
      }
    },
  ]

  constructor(
    private translationService: TranslationService,
    private dashboardService: DashboradService,
    ) {}

  ngOnInit() {
    setTimeout(() => {
      this.getTranslations();
    }, 1000);

    this.informailerData = this.dashboardService.informailerData;
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.dashboard + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.dashboard
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.dashboard + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dashboard + '_Translations') ?? ''
      );
    }
  }
}
