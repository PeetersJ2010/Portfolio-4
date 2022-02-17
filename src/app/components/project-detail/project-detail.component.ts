import { Component, OnInit } from '@angular/core';
import {Project} from "../../interfaces/project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project = {id:"NA", img:"NA", year:"NA", subTitle: "NA", title:"NA", category: "NA"};

  constructor() { }

  ngOnInit(): void {
  }

}
