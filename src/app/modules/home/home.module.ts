import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from "../../core/core.module";
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, ProjectsComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
  ]
})
export class HomeModule { }
