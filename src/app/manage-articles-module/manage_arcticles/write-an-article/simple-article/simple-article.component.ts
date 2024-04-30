import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Service/translation.service';
import * as Enums from '../../../../Service/enum.service';

@Component({
  selector: 'app-simple-article',
  templateUrl: './simple-article.component.html',
  styleUrls: ['./simple-article.component.css'],
})
export class SimpleArticleComponent {
  file: File | null = null;
  fileUrl: string | null = null;
  uploading = false;
  progress = 0;
  uploadTask: any;
  uploadComplete = false;
  // editor value
  public value: string = '';

  artTitle = '';
  artSource = '';
  // for toogle
  @Output() valueEmitter = new EventEmitter<string>();
  pageRoute = '1';
  translation: any;

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {
    this.getTranslations();
  }

  async getTranslations() {
    if (
      localStorage.getItem(Enums.pageName.writeAnArticle + '_Translations') ===
      null
    ) {
      (
        await this.translationService.getPageTranslation(
          Enums.pageName.writeAnArticle
        )
      ).subscribe((data) => {
        this.translation = data;
        window.localStorage.setItem(
          Enums.pageName.writeAnArticle + '_Translations',
          JSON.stringify(data)
        );
      });
    } else {
      this.translation = JSON.parse(
        localStorage.getItem(Enums.pageName.writeAnArticle + '_Translations') ??
          ''
      );
    }
  }

  discard() {
    this.artTitle = '';
    this.artSource = '';
    this.value = '';
    this.fileUrl = null;
    this.file = null;
    this.uploadComplete = false;
    this.cancelUpload();
  }
  // changing component
  routToArtiDetail() {
    // sending to service
    const body = [
      this.artTitle,
      this.artSource,
      this.value,
      this.file,
      this.fileUrl,
    ];

    console.log(body);

    this.router.navigate(['manage_content/artile_details'], {
      queryParams: { page: this.pageRoute },
    });
  }

  // for image uploading
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.file = file;
      this.fileUrl = URL.createObjectURL(file);
      this.uploadFile(); // Automatically start the upload when dropped
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      this.file = file;
      this.fileUrl = URL.createObjectURL(file);
      this.uploadFile(); // Automatically start the upload when dropped
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  uploadFile() {
    if (this.file) {
      this.uploading = true;
      const uploadTimeInSeconds = 5; // Adjust this value based on your estimated upload timeconst intervalTime = (uploadTimeInSeconds * 1000) / 10; // Divide by 10 for 10 intervals
      this.uploadTask = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10;
        } else {
          clearInterval(this.uploadTask);
          this.uploading = false;
          this.uploadComplete = true;
        }
      }, 100);
    }
  }

  cancelUpload() {
    clearInterval(this.uploadTask);
    this.uploading = false;
    this.progress = 0;
    this.file = null;
    this.fileUrl = null;
  }

  deselectFile() {
    this.uploadComplete = false;
    this.file = null;
    this.fileUrl = null;
  }

  formatFileSize(size: number): string {
    const kilobyte = 1024;
    const megabyte = kilobyte * kilobyte;
    const gigabyte = megabyte * kilobyte;

    if (size < kilobyte) {
      return size + ' B';
    } else if (size < megabyte) {
      return (size / kilobyte).toFixed(2) + ' KB';
    } else if (size < gigabyte) {
      return (size / megabyte).toFixed(2) + ' MB';
    } else {
      return (size / gigabyte).toFixed(2) + ' GB';
    }
  }

  routeToWriteAnArticle() {
    // history.back();
    this.router.navigate(['manage_content/write_an_article']);
  }
}
