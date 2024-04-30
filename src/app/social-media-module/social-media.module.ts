import { NgModule } from '@angular/core';

import { SocialMediaModuleRoutingModule } from './social-media-module-routing.module';
import { SettingsComponent } from './social-media/settings/settings.component';
import { ConfigurationComponent } from './social-media/configuration/configuration.component';
import { NewPostComponent } from './social-media/new-post/new-post.component';
import { SocialMediaComponent } from './social-media/social-media.component';

// import { TruncatePipe } from '../Pipes/truncate.pipe';


import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SettingsComponent,
    ConfigurationComponent,
    NewPostComponent,
    SocialMediaComponent,
    // TruncatePipe
  ],
  imports: [
    SharedModule,
    SocialMediaModuleRoutingModule,
    FormsModule,
    InputsModule,
    DateInputsModule,
  ]
})
export class SocialMediaModule { }
