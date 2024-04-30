import { Component } from '@angular/core';
import * as Enums from '../../../Service/enum.service';
import { TranslationService} from '../../../Service/translation.service'

@Component({
  selector: 'app-dashboard-data-import',
  templateUrl: './dashboard-data-import.component.html',
  styleUrls: ['./dashboard-data-import.component.css']
})
export class DashboardDataImportComponent {
 // data import
 DATA_IMPORT_USER_DATA = [
  {
    userId: 1,
    dateAdded: '2/11/2023',
    type: '',
    share: 'no',
    rows: '2',
    mode: 'Add new Data Only',
    from: 'CSV',
    status: 'pending',
    selected: false,
  },
  {
    userId: 2,
    dateAdded: '2/11/2023',
    type: 'client',
    share: 'yes',
    rows: '3',
    mode: '',
    from: 'CSV',
    status: 'pending',
    selected: false,
  },
  {
    userId: 3,
    dateAdded: '2/11/2023',
    type: '',
    share: 'no',
    rows: '0',
    mode: 'Add new Data Only',
    from: 'CSV',
    status: 'pending',
    selected: false,
  },
  {
    userId: 4,
    dateAdded: '2/11/2023',
    type: 'client',
    share: 'no',
    rows: '1',
    mode: 'Add new Data Only',
    from: 'CSV',
    status: 'completed',
    selected: false,
  },
  {
    userId: 5,
    dateAdded: '2/11/2023',
    type: '',
    share: 'no',
    rows: '5',
    mode: 'Add new Data Only',
    from: 'CSV',
    status: 'completed',
    selected: false,
  }
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

// status styling-------------------------------------------------------
getStatusStyle(status: string) {
  if (status === 'pending') {
    return {
      'background-color': '#EBF5FF',
      color: '#3399FF',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-top': '3px',
      'padding-bottom': '4px',
      'border-radius': '10px',
    };
  } else if (status === 'analyse data') {
    return {
      'background-color': '#FFF6D7',
      color: '#FFBF00',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-top': '3px',
      'padding-bottom': '4px',
      'border-radius': '10px',
    };
  } else if (status === 'completed') {
    return {
      'background-color': '#D7FFF8',
      color: '#29CCB1',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-top': '3px',
      'padding-bottom': '4px',
      'border-radius': '10px',
    };
  } else {
    return {}; // Return an empty object for default styling
  }
}

}
