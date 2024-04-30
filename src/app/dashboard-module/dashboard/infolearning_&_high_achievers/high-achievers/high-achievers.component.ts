import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';
import { DashboradService } from '../../dashborad.service';

@Component({
  selector: 'app-high-achievers',
  templateUrl: './high-achievers.component.html',
  styleUrls: ['./high-achievers.component.css'],
})
export class HighAchieversComponent {
  translation: any;
  highAchievers = [
    {
      total: '',
      passed: '',
      potientialValue: '',
      valueReached: '',
      leads: '',
    },
  ];

  constructor(
    private translationService: TranslationService,
    private dashboardService: DashboradService
  ) {}

  async ngOnInit() {
    await this.getTranslations();
    this.highAchievers = this.dashboardService.highAchievers;
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
