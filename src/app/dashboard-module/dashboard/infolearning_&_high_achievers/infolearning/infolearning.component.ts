import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';
import { DashboradService } from '../../dashborad.service';

@Component({
  selector: 'app-infolearning',
  templateUrl: './infolearning.component.html',
  styleUrls: ['./infolearning.component.css'],
})
export class InfolearningComponent {
  translation: any;
  infolearningData = [
      {
        name: "",
        category: ""
      }
    ]


    constructor(
      private translationService: TranslationService,
      private dashboardService: DashboradService,
      ) {}

  ngOnInit() {
    setTimeout(() => {
      this.getTranslations();
    }, 600);

    this.infolearningData = this.dashboardService.infolearningData;
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

  getStatusStyle(status: string): any {
    let backgroundColor = '';
    let color = '';

    // Set styles based on the status
    switch (status) {
      case 'BUSINESS':
        backgroundColor = '#FFEDED'; // Red
        color = '#F23D3D';
        break;
      // Add more cases if needed for other statuses

      default:
        case 'SCHEDULE':
        backgroundColor = '#FFFBED'; // Yellow
        color = '#FFBF00';
    }

    return {
      'background-color': backgroundColor,
      color: color,
    };
  }
}
