import { Route } from '@angular/router';

export class Breadcrumb {
  displayName!: string;
  url!: string;
  route!: Route | null;
  translatedName!: string;
}
