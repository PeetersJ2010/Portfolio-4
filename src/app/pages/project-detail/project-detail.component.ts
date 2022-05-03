import {Component, OnInit} from '@angular/core';
import {LanguageTypes, Project, ProjectType} from "../../interfaces/project";
import {ProjectService} from "../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import { AttachmentType } from 'src/app/interfaces/attachment';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project = {
    id: "NA", img: "NA", year: "NA", subTitle: "NA", title: "NA", category: new ProjectType(""),
    content: {
      about: "",
      contribution: "",
      images: [""],
      verdict: "",
      attachments: [],
    }
  };


  constructor(private vpscroller: ViewportScroller, private projectService: ProjectService, private route: ActivatedRoute, private router: Router, config: NgbCarouselConfig) {
    config.interval = 50000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId != null) {
      let projectTemp = this.projectService.getProjectById(projectId) ?? null;
      if (projectTemp != null) {
        console.log(projectTemp);
        this.project = projectTemp;
      } else {
        this.router.navigate(['/']).then();
      }
    }
  }

  scroll(id: string){
    this.vpscroller.scrollToAnchor(id)
  }

}
