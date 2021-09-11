import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationExperianceComponent } from './components/education-experiance/education-experiance.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ProjectComponent } from './components/project/project.component';
import { WritingsComponent } from './components/writings/writings.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EducationExperianceComponent,
    HeaderComponent,
    HomeScreenComponent,
    ProjectComponent,
    WritingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
