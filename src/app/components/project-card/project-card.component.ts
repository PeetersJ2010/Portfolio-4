import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../interfaces/project";

import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project = {
    id: "NA", img: "NA", year: "NA", subTitle: "NA", title: "NA", category: "NA",
    content: {
      about: "",
      contribution: "",
      images: [""],
      verdict: "",
      attachments: [{url: "", name: ""}],
    }
  };

  constructor(private vpscroller: ViewportScroller, private router: Router) {
    vpscroller.setOffset([0,80]);
  }

  ngOnInit(): void {
  }

  openProject(id: string) {
    this.vpscroller.scrollToAnchor("projects")
    console.log("fi");
    this.router.navigate(['/projects', id]).then();
  }

}
