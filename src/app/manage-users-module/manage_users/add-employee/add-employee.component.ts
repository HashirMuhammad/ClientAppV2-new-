import { Component } from '@angular/core';
import { ServiceManageUserService } from '../service-manage-user.service';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  // personal information inputs
  employeeIdInput!: string;
  titleInput!: string;
  firstnameInput!: string;
  surnameInput!: string;
  customGreetingInput!: string;
  emailInput!: string;
  genderInput: string = '';
  //Profiling inputs
  userNameInput!: string;
  qualificationInput: string = '';
  permissionInput!: string;
  emailNewsletterInput!: string;
  printedNewsletterInput!: string;
  standardprofileInput: string = '';
  tagsInput!: string;
  Qualification = [{ title: '', value: '' }];
  EmployeeProfile = [{ title: '', value: 0 }];
  translation: any;

  constructor(
    private mangerUserService: ServiceManageUserService,
    private translationService: TranslationService
  ) {
    this.Qualification = this.mangerUserService.Qualification;
    this.EmployeeProfile = this.mangerUserService.EmployeeProfile;
  }

  ngOnInit() {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.addEmployees + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.addEmployees
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.addEmployees + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.addEmployees + '_Translations') ??
          ''
      );
    }
  }

  cancel() {
    this.employeeIdInput = '';
    this.titleInput = '';
    this.firstnameInput = '';
    this.surnameInput = '';
    this.customGreetingInput = '';
    this.emailInput = '';
    this.genderInput = '';
    this.userNameInput = '';
    this.qualificationInput = '';
    this.permissionInput = '';
    this.emailNewsletterInput = '';
    this.printedNewsletterInput = '';
    this.standardprofileInput = '';
    this.tagsInput = '';
  }
}
