import { Component, Input } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-reauthorize-article',
  templateUrl: './reauthorize-article.component.html',
  styleUrls: ['./reauthorize-article.component.css'],
})
export class ReauthorizeArticleComponent {
  @Input() DashboardToogle: any;
  records = [
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label1',
      date: '22/01/2023',
      isChecked: false,
    },
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label2',
      date: '22/01/2023',
      isChecked: true,
    },
    {
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label3',
      date: '22/01/2023',
      isChecked: false,
    },
  ];
  translation: any;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.getTranslations();
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

  toggleSwitch(index: number): void {
    this.records[index].isChecked = !this.records[index].isChecked;
  }
}
