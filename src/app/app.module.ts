import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import {BsModalService} from "ngx-bootstrap/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { ProjectAttachmentComponent } from './components/project-attachment/project-attachment.component';
import {ScrollSpyModule} from "ng-spy";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import { FooterComponent } from './components/footer/footer.component';
import {AnimateOnScrollModule} from "ng2-animate-on-scroll";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProgressBarComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectAttachmentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ScrollSpyModule,
    MdbCarouselModule,
    // import module here
    AnimateOnScrollModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
