import { Component } from '@angular/core';
import { TranslationService } from '../../../Service/translation.service';
import * as Enums from '../../../Service/enum.service'

@Component({
  selector: 'app-upcoming-posts',
  templateUrl: './upcoming-posts.component.html',
  styleUrls: ['./upcoming-posts.component.css']
})
export class UpcomingPostsComponent {
  LASTEST_DATA = [
    {
      clientId: 1,
      imgUrl: '',
      arcticles:
        'very utility class in Tailwind can be applied conditionally at ',
      published_date: '06/11/2023',
      facebook: true,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
    {
      clientId: 2,
      imgUrl: '',
      arcticles: 'Here’s a simple example of a marketing page component  ',
      published_date: '06/11/2023',
      facebook: false,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
    {
      clientId: 3,
      imgUrl: '',
      arcticles:
        'very utility class in Tailwind can be applied conditionally at ',
      published_date: '06/11/2023',
      facebook: true,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
    {
      clientId: 4,
      imgUrl: '',
      arcticles: 'Here’s a simple example of a marketing page component  ',
      published_date: '06/11/2023',
      facebook: true,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    },
    {
      clientId: 5,
      imgUrl: '',
      arcticles:
        'very utility class in Tailwind can be applied conditionally at ',
      published_date: '06/11/2023',
      facebook: true,
      linkedin: false,
      instagram: false,
      twitter: false,
      xing: false,
      selected: false,
    }
  ];
  translation: any;

  constructor(
    private translationService: TranslationService,
  ){}
  
   ngOnInit(){
    setTimeout(() => {
      this.getTranslations();
    }, 1000);
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
