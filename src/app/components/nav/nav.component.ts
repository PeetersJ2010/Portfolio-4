import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {ScrollSpyService} from "ng-spy";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  isCollapsed : Boolean = true;

  constructor(private vpscroller: ViewportScroller, private scrollspyService: ScrollSpyService) {
    vpscroller.setOffset([0,80]);
  }

  ngOnInit(): void {
    this.scrollspyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => console.log(activeTargetName)
    );
  }



  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('nav-top');
      element.classList.add('nav-not-top');
    } else {
      element.classList.add('nav-top');
      element.classList.remove('nav-not-top');
    }
  }

  scroll(id: string){
    this.vpscroller.scrollToAnchor(id)
  }
}



