import { Component, OnInit } from '@angular/core';
import {Project} from "../../interfaces/project";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() : void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects)
  }
}
