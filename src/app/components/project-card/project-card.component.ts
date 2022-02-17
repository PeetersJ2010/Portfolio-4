import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../interfaces/project";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ProjectDetailComponent} from "../project-detail/project-detail.component";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project = {id:"NA", img:"NA", year:"NA", subTitle: "NA", title:"NA", category: "NA"};
  bsModalRef: BsModalRef = new BsModalRef();

  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  openProject() {
    this.bsModalRef = this.bsModalService.show(ProjectDetailComponent);
    this.bsModalRef.content.project = this.project;
  }

}
