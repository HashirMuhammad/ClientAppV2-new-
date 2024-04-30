import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './social-media/settings/settings.component';
import { ConfigurationComponent } from './social-media/configuration/configuration.component';
import { NewPostComponent } from './social-media/new-post/new-post.component';
import { SocialMediaComponent } from './social-media/social-media.component';

const routes: Routes = [
  {
      path: '',
      data: { breadcrumb: 'Social Media' },
      component: SocialMediaComponent,
    },
    {
      path: 'new_post',
      data: { breadcrumb: 'Social Media' },
      component: NewPostComponent,
    },
    {
      path: 'configuration',
      data: { breadcrumb: 'Social Media' },
      component: ConfigurationComponent,
    },
    {
      path: 'settings',
      data: { breadcrumb: 'Social Media' },
      component: SettingsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaModuleRoutingModule { }
