import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboradService {
  // dashboard
  dashboarddata = {
    cards: {
      subcribers: 68,
      employees: 28,
      clients: 40,
      printNewsletter: 21,
      emailNewsletter: 9,
      unsub: 1
    },
    clientGrapgh: {
      openedClientsGraph: [0, 276, 310, 212, 240, 156, 98, 165, 210, 287, 144, 190],
      dileveredClientsGraph: [165, 210, 287, 144, 190, 167, 212, 140, 195, 46, 123, 78],
      sentClientsGraph: [56, 140, 195, 46, 123, 78, 95, 76, 310, 212, 240, 140]
    },
    employeeGrapgh: {
      openedemployeeGraph: [0, 276, 310, 212, 240],
      dileveredemployeeGraph: [165, 210, 287, 144, 190],
      sentemployeeGraph: [56, 140, 195, 46, 123],
      empMonth: 11,
      empYear: 2023
    },
    dashboardItems: {
      subscribercard: [{ "cols": 5, "rows": 4, "y": 0, "x": 0 }],
      employeecard: [{ "cols": 5, "rows": 4, "y": 0, "x": 5 }],
      clientcard: [{ "cols": 5, "rows": 4, "y": 0, "x": 10 }],
      printedNewslettercard: [{ "cols": 5, "rows": 4, "y": 0, "x": 15 }],
      emailNewslettercard: [{ "cols": 5, "rows": 4, "y": 0, "x": 20 }],
      unsubscribercard: [{ "cols": 5, "rows": 4, "y": 0, "x": 25 }],
      graph1: [{ "cols": 15, "rows": 9, "y": 4, "x": 0 }],
      graph2: [{ "cols": 15, "rows": 9, "y": 4, "x": 15 }],
      infomailer: [{ "cols": 11, "rows": 9, "y": 13, "x": 0 }],
      file: [{ "cols": 19, "rows": 9, "y": 13, "x": 11 }],
      infolearning: [{ "cols": 19, "rows": 9, "y": 22, "x": 0 }],
      high: [{ "cols": 11, "rows": 9, "y": 22, "x": 19 }],
      recentArticles: [{ "cols": 11, "rows": 9, "y": 31, "x": 0 }],
      dataImport: [{ "cols": 19, "rows": 9, "y": 31, "x": 11 }],
      configuration: [{ "cols": 13, "rows": 9, "y": 40, "x": 0 }],
      selectConcept: [{ "cols": 17, "rows": 9, "y": 40, "x": 13 }]
    },
    toggles: {
      graph1toogle: true,
      graph2toogle: true,
      infotoogle: true,
      filetoogle: true,
      learntoogle: true,
      hightoogle: true,
      recentSocialtoogle: true,
      dataImporttoogle: true,
      configurationtoogle: true,
      selectConcepttoogle: true,
      SubcriberCardtoogle: true,
      EmployeeCardtoogle: true,
      ClientCardtoogle: true,
      printedNewsletterCardtoogle: true,
      EmailNewsletterCardtoogle: true,
      UnsubscriberCardtoogle: true
    }
  }
  
  // file and sign
  recievedDocumentsData = [
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'SCHEDULE',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
  ];
  sentDocumentsData = [
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'SCHEDULE',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
    {
      content: 'Message Content Here',
      department: 'Infomanagement',
      startDate: 'Oct 3, 2022',
      endDate: 'Oct 3, 2022',
      status: 'UNSOLVED',
    },
  ];
  // informailer
  informailerData = [
    {
      imgSrc: '../../../../assets/infomailer-dashboard/cus1.png',
      campaignName: 'Demo Campaign - First',
      dateTime: 'November 9, 2022 11:00AM',
      statusLabel: {
        text: 'UNPAID',
        backgroundColor: '#EBF5FF',
        textColor: '#3399FF',
      },
    },
    {
      imgSrc: '../../../../assets/infomailer-dashboard/cus2.png',
      campaignName: 'Mery Christmas & Happy New Year',
      dateTime: 'November 9, 2022 11:00 AM',
      statusLabel: {
        text: 'SCHEDULED',
        backgroundColor: '#FFF6D7',
        textColor: '#FFBF00',
      },
    },
    {
      imgSrc: '../../../../assets/infomailer-dashboard/cus3.png',
      campaignName: 'Bank Holiday 19th September 2022',
      dateTime: 'November 9, 2022 11:00 AM',
      statusLabel: {
        text: 'SCHEDULED',
        backgroundColor: '#D7FFF8',
        textColor: '#29CCB1',
      },
    },
  ];
  // high achievers
  highAchievers = [
    {
      total: '64',
      passed: '2',
      potientialValue: '660000',
      valueReached: '25',
      leads: '10',
    },
  ];
  // inforlearning
  infolearningData = [
    {
      name: "Tutorial 301 - Anti Money Laundary for Tax Practitioners",
      category: "ACCOUNTIND STANDARDS"
    },
    {
      name: "Tutorial 300 - Data Protection Act 2018 (GDPR)",
      category: "BUSINESS"
    },
    {
      name: "Tutorial 802 - EU VAT e-commerce",
      category: "BUSINESS"
    },
    {
      name: "Tutorial 20 - Class 4 NIC",
      category: "NATIONAL INSURANCE & PENSIONS"
    },
    {
      name: "Tutorial 159 - Trading and property allowance",
      category: "INCOME TAX"
    }
  ]

  constructor() {}
}
