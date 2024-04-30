import { ChangeDetectorRef, Component } from '@angular/core';
import { Breadcrumb } from '../../view-models/Breadcrumb';
import { BreadcrumbService } from '../../Service/breadcrumb.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  breadcrumbs!: Breadcrumb[];
  translation: any;
  unsub!: Subscription;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.breadcrumbService.breadcrumbChanged.subscribe(
      (crumbs: Breadcrumb[]) => {
        this.onBreadcrumbChange(crumbs);
      }
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.cdr.detectChanges();
      // this.getTranslations();
    });
    // this.unsub = this.sharedService.sharedData$
    //   .subscribe({
    //     next: (res: any) => {
    //       this.getTranslations();
    //     }
    //   });
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

  onBreadcrumbChange(crumbs: Breadcrumb[]) {
    this.breadcrumbs = crumbs;
  }

  // translationAddedToBreadCrumb() {
  //   if (this.breadcrumbs != undefined && this.breadcrumbs.length > 0) {
  //     for (const item of this.breadcrumbs) {
  //       if (item.displayName == 'Campaigns') {
  //         item.translatedName = this.translation.INFROMAILER_MENU_CAMPAIGN
  //       }
  //       if (item.displayName == 'New Campaign') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_NEWCAMPAIGN
  //       }
  //       if (item.displayName == 'Overview') {
  //         item.translatedName = this.translation.INFROMAILER_MENU_DASHBOARD
  //       }
  //       if (item.displayName == 'Recipients') {
  //         item.translatedName = this.translation.INFROMAILER_MENU_LIST
  //       }
  //       if (item.displayName == 'Templates') {
  //         item.translatedName = this.translation.INFROMAILER_MENU_TEMPLATE
  //       }
  //       if (item.displayName == 'Reports') {
  //         item.translatedName = this.translation.INFROMAILER_MENU_REPORT
  //       }
  //       if (item.displayName == 'Search Result') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_SEARCHRESULT
  //       }
  //       if (item.displayName == 'Recipient Detail') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_LISTDETAIL
  //       }
  //       if (item.displayName == 'Recipient Csv Export') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_RECIPIENTCSVEXPORT
  //       }
  //       if (item.displayName == 'Add Subscriber') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_ADDSUBSCRIBER
  //       }
  //       if (item.displayName == 'Custom Fields') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_CUSTOMFIELDS
  //       }
  //       if (item.displayName == 'Create Recipient') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_CREATERECIPIENT
  //       }
  //       if (item.displayName == 'Created Recipient') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_CREATEDRECIPIENT
  //       }
  //       if (item.displayName == 'Import from database') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_IMPORTFROMDATABASE
  //       }
  //       if (item.displayName == 'Import Csv error detail') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_IMPORTCSVERRORDETAIL
  //       }
  //       if (item.displayName == 'Import database search result') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_IMPORTDATABASESEARCHRESULT
  //       }
  //       if (item.displayName == 'Downloaded export csv') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_DOWNLOADEDEXPORTCSV
  //       }
  //       if (item.displayName == 'Download export csv') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_DOWNLOADEXPORTCSV
  //       }
  //       if (item.displayName == 'Unsubscriber list') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_UNSUBSCRIBERLIST
  //       }
  //       if (item.displayName == 'Report Detail') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_REPORTDETAIL
  //       }
  //       if (item.displayName == 'File Manager') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_FILEMANAGER
  //       }
  //       if (item.displayName == 'Design Template') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_DESIGNTEMPLATE
  //       }
  //       if (item.displayName == 'Layouts') {
  //         item.translatedName = this.translation.INFORMAILER_MENU_LAYOUTS
  //       }
  //     }
  //   }
  // }
}
