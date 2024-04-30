import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportsServiceService {
  // clients data ----------------------------------------------------------------------------------
  ClientOverview = {
    ClientSent: 1,
    ClientDileverd: 5,
    ClientOpened: 7,
    ClientUniqueclicks: 0,
    ClientUniqueUserclicks: 11,
    ClientBounced: 1,
    ClientFailed: 1,
    ClientUnsubcribed: 0,
    ClientOpenRate: 70,
    ClientclickRate: 0,
    ClientSuccessfuldileveries: '1(20%)',
    ClientTotalClicks: 0,
    ClientLastOpened: '3/8/2023 10:48',
    ClientLastClicked: '',
    ClientLastUpdated: '1/1/2023 0:51',
  };
  Category = [
    { title: 'June 2023 Monthly Newsletter', data: [4, 0, 5, 0, 0, 1] },
    { title: 'June 2023 Monthly Newsletter', data: [2, 0, 1, 3, 0, 1] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 1, 1] },
  ];
  CategoryClickRate = [
    { title: 'June 2023 Monthly Newsletter', data: [4, 0, 5, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [2, 0, 1, 3, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 1, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 2, 1, 0, 2, 1, 5] },
  ];
  articleData = [
    {
      id: 1,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 2,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 3,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 4,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 5,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 6,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 7,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 8,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
  ];
  // Sent
  SentToData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  DileveredData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  OpenedData = [
    { id: 1, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 2, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 3, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 4, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 5, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 6, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
  ];
  // clicks
  UniqueClicksData = [
    {
      id: 1,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 2,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 3,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 4,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 5,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 6,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
  ];
  UniqueUserClicksData = [
    { id: 1, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 2, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 3, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 4, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 5, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 6, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
  ];
  // Status
  BouncedData = [
    {
      id: 1,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 2,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 3,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 4,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 5,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 6,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
  ];
  BouncesHeaderData = {
    totalBounces: 4,
    SoftBounces: 4,
    HardBounces: 4,
    Others: 4,
  };
  UnopenedData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  FailedData = [
    { id: 1, email: 'test@gmail.com', message: 'message' },
    { id: 2, email: 'test@gmail.com', message: 'message' },
    { id: 3, email: 'test@gmail.com', message: 'message' },
    { id: 4, email: 'test@gmail.com', message: 'message' },
    { id: 5, email: 'test@gmail.com', message: 'message' },
    { id: 6, email: 'test@gmail.com', message: 'message' },
  ];
  UnsubscribedData = [
    { id: 1, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 2, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 3, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 4, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 5, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 6, email: 'test@gmail.com', date: '01/01/2024' },
  ];
  CallBackData = [
    {
      id: 1,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 2,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 3,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 4,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 5,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 6,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
  ];

  // Employee data ----------------------------------------------------------------------------------
  EmployeeOverview = {
    ClientSent: 10,
    ClientDileverd: 50,
    ClientOpened: 70,
    ClientUniqueclicks: 20,
    ClientUniqueUserclicks: 11,
    ClientBounced: 11,
    ClientFailed: 12,
    ClientUnsubcribed: 10,
    ClientOpenRate: 70,
    ClientclickRate: 5,
    ClientSuccessfuldileveries: '1(20%)',
    ClientTotalClicks: 0,
    ClientLastOpened: '3/8/2023 10:48',
    ClientLastClicked: '',
    ClientLastUpdated: '1/1/2023 0:51',
  };
  EmployeeCategory = [
    { title: 'June 2023 Monthly Newsletter', data: [4, 0, 5, 0, 0] },
    { title: 'June 2023 Monthly Newsletter', data: [2, 0, 1, 3, 0] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 1] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 2, 1, 0, 2] },
  ];
  EmployeeCategoryClickRate = [
    { title: 'June 2023 Monthly Newsletter', data: [4, 0, 5, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [2, 0, 1, 3, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 0, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 0, 1, 0, 1, 1, 5] },
    { title: 'June 2023 Monthly Newsletter', data: [0, 2, 1, 0, 2, 1, 5] },
  ];
  EmployeearticleData = [
    {
      id: 1,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 2,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 3,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 4,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 5,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 6,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 7,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
    {
      id: 8,
      title: 'title',
      description: 'dest',
      receieved: 1,
      openRate: 0,
      callBacks: 0,
      readMore: 0,
      interest: 0,
    },
  ];
  // Sent
  EmployeeSentToData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  EmployeeDileveredData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  EmployeeOpenedData = [
    { id: 1, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 2, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 3, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 4, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 5, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
    { id: 6, email: 'test@gmail.com', lastOpened: '01/01/2024', count: 1 },
  ];
  // clicks
  EmployeeUniqueClicksData = [
    {
      id: 1,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 2,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 3,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 4,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 5,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
    {
      id: 6,
      articleTitle: 'article',
      email: 'test@gmail.com',
      lastClicked: '01/01/2024',
      count: 1,
    },
  ];
  EmployeeUniqueUserClicksData = [
    { id: 1, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 2, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 3, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 4, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 5, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
    { id: 6, email: 'test@gmail.com', lastClicked: '01/01/2024', count: 1 },
  ];
  // Status
  EmployeeBouncedData = [
    {
      id: 1,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 2,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 3,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 4,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 5,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
    {
      id: 6,
      email: 'test@gmail.com',
      Subject: 'Subject',
      type: 'hard',
      Description: 'description of email',
    },
  ];
  EmployeeBouncesHeaderData = {
    totalBounces: 4,
    SoftBounces: 4,
    HardBounces: 4,
    Others: 4,
  };
  EmployeeUnopenedData = [
    { id: 1, email: 'test@gmail.com' },
    { id: 2, email: 'test@gmail.com' },
    { id: 3, email: 'test@gmail.com' },
    { id: 4, email: 'test@gmail.com' },
    { id: 5, email: 'test@gmail.com' },
    { id: 6, email: 'test@gmail.com' },
  ];
  EmployeeFailedData = [
    { id: 1, email: 'test@gmail.com', message: 'message' },
    { id: 2, email: 'test@gmail.com', message: 'message' },
    { id: 3, email: 'test@gmail.com', message: 'message' },
    { id: 4, email: 'test@gmail.com', message: 'message' },
    { id: 5, email: 'test@gmail.com', message: 'message' },
    { id: 6, email: 'test@gmail.com', message: 'message' },
  ];
  EmployeeUnsubscribedData = [
    { id: 1, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 2, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 3, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 4, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 5, email: 'test@gmail.com', date: '01/01/2024' },
    { id: 6, email: 'test@gmail.com', date: '01/01/2024' },
  ];
  EmployeeCallBackData = [
    {
      id: 1,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 2,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 3,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 4,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 5,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
    {
      id: 6,
      articleTitle: 'title',
      firstName: 'firstname',
      surName: 'surname',
      email: 'test@gmail.com',
      date: '01/01/2024',
    },
  ];

  //-------------------------------------------------------------------------------

  constructor() {}
}
