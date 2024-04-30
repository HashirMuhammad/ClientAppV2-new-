import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './Pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TruncatePipe
  ]
})
export class SharedModule { }
