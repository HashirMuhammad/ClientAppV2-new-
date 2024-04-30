import { Component } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

@Component({
  selector: 'app-share-file-import',
  templateUrl: './share-file-import.component.html',
  styleUrls: ['./share-file-import.component.css'],
})
export class ShareFileImportComponent {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
  myRestrictions: FileRestrictions = {
    allowedExtensions: ['.csv'],
  };
  emailAddressInput: any;
  SplitterInput: any;
  TypeInput: any;
  ImportModeInput: any;
  ReferenceFieldInput: any;
  registeredUsersInput: any;
  deleteUsersInput: any;
  appendCommaInput: any;
  public listItems: Array<string> = [
    'BIK Code',
    'Profile',
    'Surname',
    'Address',
  ];
  public value: any = [];
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

  next() {}
}
