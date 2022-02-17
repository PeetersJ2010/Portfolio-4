import { Injectable } from '@angular/core';
import {Project} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    let projects : Project[] = [];

    let shopProject: Project = {
      id: "shop",
      title: "DSport Webshop",
      subTitle: "Angular Challenge: Sport Webshop",
      year: "2021-2022",
      img: "shop.jpg",
      category: "School project"
    }

    let todoProject: Project = {
      id: "todo",
      title: "ToDo App",
      subTitle: "Project Angular: ToDo App",
      year: "2021-2022",
      img: "todo.jpg",
      category: "School project"
    }

    let rootzProject: Project = {
      id: "rootz",
      title: "ROOTZ barbershop",
      subTitle: "Website voor een barbershop in Zandhoven",
      year: "2020-2021",
      img: "rootz.jpg",
      category: "Website"
    }

    let phpProject: Project = {
      id: "php",
      title: "Project PHP",
      subTitle: "Web applicatie voor een freerunning club",
      year: "2020-2021",
      img: "php.jpg",
      category: "School project"
    }

    let wpfProject: Project = {
      id: "wpf",
      title: "WPF Schaken",
      subTitle: "WPF applicatie bordspel: schaken",
      year: "2020-2021",
      img: "wpf.jpg",
      category: "School project"
    }

    let idkdProject: Project = {
      id: "idkd",
      title: "In Den Kleyne Doorenboom",
      subTitle: "Website voor een brasserie",
      year: "2020-2021",
      img: "idkd.png",
      category: "Website"
    }

    let drfProject: Project = {
      id: "drf",
      title: "DRforces",
      subTitle: "Website voor een drone hobbypiloot",
      year: "2020-2021",
      img: "drf.jpg",
      category: "Website"
    }

    let caProject: Project = {
      id: "ca",
      title: "Cordova App",
      subTitle: "Project Cordova: Muziek speler",
      year: "2020-2021",
      img: "ca.jpg",
      category: "School project"
    }


    projects.push(shopProject);
    projects.push(todoProject);
    projects.push(rootzProject);
    projects.push(phpProject);
    projects.push(wpfProject);
    projects.push(idkdProject);
    projects.push(drfProject);
    projects.push(caProject);

    return projects;
  }
}
