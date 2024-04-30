import { Component } from '@angular/core';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DashboradService } from '../../dashborad.service';

@Component({
  selector: 'app-file-and-sign',
  templateUrl: './file-and-sign.component.html',
  styleUrls: ['./file-and-sign.component.css'],
  animations: [
    trigger('rowAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms ease-in',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class FileAndSignComponent {
  activeButton: number = 1;
  translation: any;
  recievedDocumentsData = [
    {
      content: '',
      department: '',
      startDate: '',
      endDate: '',
      status: '',
    },
  ];
  sentDocumentsData = [
    {
      content: '',
      department: '',
      startDate: '',
      endDate: '',
      status: '',
    },
  ];

  constructor(
    private translationService: TranslationService,
    private dahboardService: DashboradService,
    ) {}

    ngOnInit() {
      setTimeout(() => {
        this.getTranslations();
      }, 800);

      this.recievedDocumentsData = this.dahboardService.recievedDocumentsData;
      this.sentDocumentsData = this.dahboardService.sentDocumentsData;
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

  setActive(buttonNumber: number) {
    this.activeButton = buttonNumber;
    console.log(this.activeButton);
  }

  getStatusStyle(status: string): any {
    let backgroundColor = '';
    let color = '';

    // Set styles based on the status
    switch (status) {
      case 'UNSOLVED':
        backgroundColor = '#FFEDED'; // Red
        color = '#F23D3D';
        break;
      case 'SCHEDULE':
        backgroundColor = '#FFFBED'; // Yellow
        color = '#FFBF00';
        break;
      // Add more cases if needed for other statuses

      default:
        backgroundColor = 'initial';
        color = 'initial';
    }

    return {
      'background-color': backgroundColor,
      color: color,
    };
  }
}
