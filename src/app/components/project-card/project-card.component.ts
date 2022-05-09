import {Component, Input, OnInit} from '@angular/core';
import {Project, ProjectType} from "../../interfaces/project";

import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project = {
    id: "NA", img: "NA", year: "NA", subTitle: "NA", title: "NA", category: new ProjectType(""),
    content: {
      about: "",
      contribution: "",
      images: [""],
      verdict: "",
      attachments: [],
    }
  };

  constructor(private vpscroller: ViewportScroller, private router: Router) {
    vpscroller.setOffset([0,60]);
  }

  ngOnInit(): void {
  }

  openProject(id: string) {
    this.vpscroller.scrollToAnchor("projects");
    this.router.navigate(['/projects', id]).then();
  }

}
