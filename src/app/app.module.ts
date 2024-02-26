import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { SectionComponent } from './components/section/section.component';
import { TitleDescriptionComponent } from './components/title-description/title-description.component';
import { CardComponent } from './components/card/card.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SectionWithTitleComponent,
    SectionComponent,
    TitleDescriptionComponent,
    CardComponent,
    WorkCardComponent,
    PeopleCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
