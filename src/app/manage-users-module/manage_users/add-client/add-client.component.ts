import { Component } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  // personal information inputs
  cliendIdInput!: string;
  titleInput!: string;
  firstnameInput!: string;
  surnameInput!: string;
  customGreetingInput!: string;
  emailInput!: string;
  genderInput: string = '';
  // address inputs
  address1Input!: string;
  address2Input!: string;
  address3Input!: string;
  address4Input!: string;
  cityInput!: string;
  countryInput!: string;
  postCodeInput!: string;
  usernameInput!: string;
  standardprofileInput: string = 'standardProfile';
  customerProfileInput: string = '';
  registerOnlineInput!: string;
  tagsInput!: string;
  //Profiling inputs
  accountManagerInput: string = '';
  CompanyInput!: string;
  SICCodeInput!: string;
  emailNewsletterInput!: string;
  printedNewsletterInput!: string;
  CustomerProfile = [{ title: '', value: 0 }];
  AccountManager = [{ title: '', value: '' }];
  translation: any;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService
  ) {
    this.CustomerProfile = this.mangerUserService.CustomerProfile;
    this.AccountManager = this.mangerUserService.AccountManager;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.addClients + '_Translations') === null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.addClients
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.addClients + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.addClients + '_Translations') ?? ''
      );
    }
  }

  saveAndFinish(): void {
    const formData = {
      cliendId: this.cliendIdInput,
      title: this.titleInput,
      firstname: this.firstnameInput,
      surname: this.surnameInput,
      customgreetings: this.customGreetingInput,
      emailaddress: this.emailInput,
      gender: this.genderInput,

      address1: this.address1Input,
      address2: this.address2Input,
      address3: this.address3Input,
      address4: this.address4Input,
      city: this.cityInput,
      country: this.countryInput,
      postcode: this.postCodeInput,
      username: this.usernameInput,
      standardprofile: this.standardprofileInput,
      customerProfile: this.customerProfileInput,
      registerOnline: this.registerOnlineInput,
      tag: this.tagsInput,

      accountmanager: this.accountManagerInput,
      company: this.CompanyInput,
      siccode: this.SICCodeInput,
      emailnewsletter: this.emailNewsletterInput,
      printednewsletter: this.printedNewsletterInput,
    };

    console.log('Form Data:', formData);
  }

  cancel() {
    this.cliendIdInput = '';
    this.titleInput = '';
    this.firstnameInput = '';
    this.surnameInput = '';
    this.customGreetingInput = '';
    this.emailInput = '';
    this.genderInput = '';
    this.address1Input = '';
    this.address2Input = '';
    this.address3Input = '';
    this.address4Input = '';
    this.cityInput = '';
    this.countryInput = '';
    this.postCodeInput = '';
    this.usernameInput = '';
    this.standardprofileInput = 'standardProfile';
    this.customerProfileInput = '';
    this.registerOnlineInput = '';
    this.tagsInput = '';
    this.accountManagerInput = '';
    this.CompanyInput = '';
    this.SICCodeInput = '';
    this.emailNewsletterInput = '';
    this.printedNewsletterInput = '';
  }
}
