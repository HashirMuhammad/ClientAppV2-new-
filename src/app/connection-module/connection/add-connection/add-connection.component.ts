import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css'],
})
export class AddConnectionComponent {
  isSaveButtonEnabled: any;
  translation: any;
  // {{ translation?.CLIENTAPPV2_CONNECTION_SELECTPROVIDER }}
  // {{ translation?.CLIENTAPPV2_CONNECTION_AUTHENTICATION }}
  steps = [{ label: 'Select Provider' }, { label: 'Authentication' }];
  currentStep = 0;
  selectedOption: any;
  addConectionoptions = [{ value: 'Xero', title: 'Xero' }];
  cliendIdInput: any;
  cliendSecretInput: any;

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.connection + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.connection
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.connection + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.connection + '_Translations') ?? ''
      );
    }
  }

  console(event: any) {
    this.currentStep = event;
    console.log(this.currentStep);
  }

  Next() {
    this.currentStep = 1;
  }

  Back() {
    this.currentStep = 0;
  }
}
