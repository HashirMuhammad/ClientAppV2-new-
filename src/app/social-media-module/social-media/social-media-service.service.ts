import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaServiceService {
  // latest
  CLIENT_DATA = [
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
    },
    {
      clientId: 6,
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
      clientId: 7,
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
      clientId: 8,
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
      clientId: 9,
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
      clientId: 10,
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
      clientId: 11,
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
      clientId: 12,
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
      clientId: 13,
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
      clientId: 14,
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
      clientId: 15,
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
    // Add more client data as needed
  ];

  // configuration
  records = [
    {
      id: 1,
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label1',
      date: '22/01/2023',
      page: [
        {
          id: 1,
          pagename: 'page 1',
          pageChecked: false,
        },
        {
          id: 2,
          pagename: 'page 2',
          pageChecked: true,
        },
      ],
      isChecked: false,
    },
    {
      id: 2,
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label2',
      date: '22/01/2023',
      page: [
        {
          id: 1,
          pagename: 'page 1',
          pageChecked: false,
        },
        {
          id: 2,
          pagename: 'page 2',
          pageChecked: true,
        },
        {
          id: 3,
          pagename: 'page 3',
          pageChecked: false,
        },
        {
          id: 4,
          pagename: 'page 4',
          pageChecked: true,
        },
      ],
      isChecked: true,
    },
    {
      id: 3,
      avatar: '../../../assets/history/Avatar.png',
      label: 'Label3',
      date: '22/01/2023',
      page: [],
      isChecked: false,
    },
  ];
  constructor() {}
}
