import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslationService {
  url = '';
  accountantId: any;
  languageId: any;

  constructor(public http: HttpClient) {}

  getLanguageID(portalId: string) {
    return portalId;
  }

  async getPageTranslation(page: any): Promise<Observable<any>> {
    if (window.localStorage.getItem('tempLanguageId') === null) {
      this.languageId = this.getLanguageID(
        window.localStorage.getItem('portalId') ?? ''
      );
    } else {
      this.languageId = window.localStorage.getItem('tempLanguageId');
    }

    this.url =
      environment.cdnUrl +
      'Dictionary/' +
      environment.websiteSettings?.websiteId +
      '/' +
      this.languageId +
      '/Default/' +
      page +
      '_Translation.json';

    return await Observable.create(async (observer: any) => {
      this.checkFileExists().subscribe((res: any) => {
        if (res === true) {
          this.http.get(this.url).subscribe((result) => {
            observer.next(result);
            observer.complete();
          });
        } else {
          this.url =
            environment.cdnUrl +
            'Dictionary/' +
            environment.websiteSettings?.websiteId +
            '/' +
            this.languageId +
            '/Default/' +
            page +
            '_Translation.json';
          this.http.get(this.url).subscribe((result) => {
            observer.next(result);
            observer.complete();
          });
        }
      });
    });
  }

  checkFileExists(): Observable<boolean> {
    return Observable.create(
      (observer: { next: (arg0: boolean) => void; complete: () => void }) => {
        this.http.get(this.url).subscribe(
          (result) => {
            observer.next(true);
            observer.complete();
          },
          (error) => {
            if (error.status === 404) {
              observer.next(false);
              observer.complete();
            }
          }
        );
      }
    );
  }
}
