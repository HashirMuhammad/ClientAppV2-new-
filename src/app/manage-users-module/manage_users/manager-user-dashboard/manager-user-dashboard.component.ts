import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-user-dashboard',
  templateUrl: './manager-user-dashboard.component.html',
  styleUrls: ['./manager-user-dashboard.component.css']
})
export class ManagerUserDashboardComponent {
  newsletterrecieved = 1;
  newslettersent = 2;
  usercount = 1;
  employeecount = 3;
  clientcount = 4;
  verifyemailcount = 1;
  customerProfile = 'all';

}
