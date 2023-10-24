import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './Components/baner/baner.component';
import { ResponsiveDirective } from './Direactives/responsive.directive';
import { PersonalinformationComponent } from './Components/personalinformation/personalinformation.component';
import { EducatiuonComponent } from './Components/educatiuon/educatiuon.component';
import { WorkexperienceComponent } from './Components/workexperience/workexperience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    ResponsiveDirective,
    PersonalinformationComponent,
    EducatiuonComponent,
    WorkexperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
