import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
// For MDB Angular Free
@NgModule({
  declarations: [HeaderComponent, ErrorpageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
