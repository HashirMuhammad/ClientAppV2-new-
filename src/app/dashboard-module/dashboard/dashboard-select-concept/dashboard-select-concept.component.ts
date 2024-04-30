import { Component } from '@angular/core';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-dashboard-select-concept',
  templateUrl: './dashboard-select-concept.component.html',
  styleUrls: ['./dashboard-select-concept.component.css']
})
export class DashboardSelectConceptComponent {
//select concept
USER_DATA = [
  {
    id: 1,
    description: 'test',
    conceptDate: '29/11/2023',
    sendConceptDate: '29/11/2023',
    conceptType: 'Monthly Newsletter',
    selected: false,
  },
  {
    id: 2,
    description: 'test',
    conceptDate: '29/11/2023',
    sendConceptDate: '29/11/2023',
    conceptType: 'Monthly Newsletter',
    selected: false,
  },
  // Add more client data as needed
];
translation: any;

constructor(
  private translationService: TranslationService,
){}

 ngOnInit(){
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
}
