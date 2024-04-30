import { Component } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { TranslationService } from '../../../../Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

@Component({
  selector: 'app-normal-import',
  templateUrl: './normal-import.component.html',
  styleUrls: ['./normal-import.component.css'],
})
export class NormalImportComponent {
  emailAddressInput: any;
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
  myRestrictions: FileRestrictions = {
    allowedExtensions: ['.csv'],
  };
  step1 = false;
  step2 = false;
  step3 = false;
  nextStep = false;
  public steps = [
    { label: 'Upload File' },
    { label: 'Configuration' },
    { label: 'Map Columns' },
  ];
  SplitterInput = '';
  TypeInput = '';
  currentStep = 0;
  registeredUsersInput: any;
  deleteUsersInput: any;
  appendCommaInput: any;
  public listItems: Array<string> = [
    'Username',
    'BIK Code',
    'Profile',
    'Surname',
    'Address',
  ];
  public value: any = ['Username'];
  ModeInput: any;
  ReferenceFieldInput: any;
  ClientNumberInput: any;
  CompanyNameInput: any;
  TitleInput: any;
  InitialsInput: any;
  SurnameInput: any;
  EmailAddressSelectInput: any;
  CustomGreetingsInput: any;
  GenderInput: any;
  Address1Input: any;
  Address2Input: any;
  Address3Input: any;
  Address4Input: any;
  CityInput: any;
  CountryInput: any;
  PostcodeInput: any;
  ProfileInput: any;
  BIKCodeInput: any;
  HaveEmailNewsletterInput: any;
  NavisonCodeInput: any;
  PrintedNewsletterInput: any;
  UserNameInput: any;
  PasswordInput: any;
  AccountManagerInput: any;
  TagsInput: any;
  translation: any;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.dataImport + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.dataImport
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.dataImport + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.dataImport + '_Translations') ?? ''
      );
    }
  }

  onUpload(event: any): void {
    // Handle successful uploads
    console.error('Upload failed', event);
  }

  onError(event: any): void {
    // Handle errors
    console.error('Upload failed', event);
  }

  console(event: any) {
    this.currentStep = event;
    console.log(this.currentStep);
  }

  validStep1() {
    debugger;
    if (this.SplitterInput == '' && this.TypeInput == '') {
      this.step1 = false;
    } else {
      this.step1 = true;
      this.nextStep = true;
    }
  }

  validStep2() {
    debugger;
    this.step2 = true;
  }

  next() {
    debugger;
    if (this.currentStep == 0) {
      this.validStep1();
    } else if (this.currentStep == 1) {
      this.validStep2();
    }
    if (this.nextStep == true) {
      this.currentStep += 1;
    } else {
      this.currentStep = this.currentStep;
    }
  }

  changeStep(event: any) {
    debugger;
    this.currentStep = event;
    if (this.currentStep == 1) {
      this.validStep1();
    } else if (this.currentStep == 2) {
      this.validStep2();
    }

    if (this.nextStep == true) {
    } else {
      setTimeout(() => {
        this.currentStep -= 1;
      }, 100);
    }
    console.log(event);
  }
}
