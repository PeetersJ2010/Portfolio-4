import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vpScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(id: string){
    this.vpScroller.scrollToAnchor(id)
  }

}
