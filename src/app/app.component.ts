import {Component, ElementRef, ViewChild} from '@angular/core';
import {slideInAnimation} from "./animations";
import {Router, RouterOutlet} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {ScrollSpyService} from "ng-spy";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'app';
  // @ViewChild('home') homeElement!: ElementRef;
  // @ViewChild('about') aboutElement!: ElementRef;

  constructor(private spyService: ScrollSpyService, private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'This is the portfolio of Joppe Peeters, a student at the IT-Factory of Thomas More Geel' },
      { name: 'keywords', content: 'Joppe, Peeters, Portfolio, IT Factory, IT-Factory, Application development, Applicatie ontwikkeling, Student, Angular, HTML, Websites, Projects' }
    ]);
  }

  ngAfterViewInit() {
    // this.spyService.spy({ thresholdBottom: 50 });
    // this.spyService.addTarget({name: "home", element: this.homeElement});
    // this.spyService.addTarget({name: "about", element: this.aboutElement});
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }


}

