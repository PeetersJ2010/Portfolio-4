import {Injectable} from '@angular/core';
import {Project} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {
    let shopProject: Project = {
      id: "shop",
      title: "DSport Webshop",
      subTitle: "Angular Challenge: Sport Webshop",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2021-2022",
      img: "shop.jpg",
      category: "School project"
    }

    let todoProject: Project = {
      id: "todo",
      title: "ToDo App",
      subTitle: "Project Angular: ToDo App",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2021-2022",
      img: "todo.jpg",
      category: "School project"
    }

    let rootzProject: Project = {
      id: "rootz",
      title: "ROOTZ barbershop",
      subTitle: "Website voor een barbershop in Zandhoven",

      content: {
        about: "ROOTZ - Herenkapper & Barbier is een exclusieve kapperszaak gelegen in het hart van Zandhoven. Als taak kreeg ik voor dit project een nieuwe huisstijl creëren samen met een website. Vooraf dit project bezat ROOTZ reeds van een reservatie systeem dat uitstekend werkte waardoor we dit konden herinplementeren in de nieuwe website.\n" +
          "\n" +
          "Ik ben begonnen met het ontwerpen van een nieuw logo en de basis layout van de nieuwe website. Na overleg, hadden we het perfecte logo en ontwerp gevonden voor ROOTZ en kon ik beginnen programmeren. De website ging een onepager worden met 5 secties; hero, over ons, aanbiedingen, openingsuren en contact. Natuurlijk is deze website gemaakt met alle moderne regels van de kunst: een minimale laadtijd, responsiviteit voor mobiele apparaten, ...\n" +
          "Het resultaat kunt u onderaan bekijken.",
        contribution: "Van logo to website heb ik alles zelf gemaakt, maar ik heb Nick, de eigenaar, altijd een aantal ontwerpen gegeven waaruit hij de best passende opties heeft gekozen. Voor deze website is er geen onderhoud nodig dus dit heb ik volledig overgelaten aan Nick, maar als er technische problemen zijn, mag hij mij altijd contacteren.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Logo.jpg"
        ],
        verdict: "Nick was zeer tevreden over het eindresultaat.\n" +
          "“Ik ben super tevreden met mijn samenwerking met Joppe. Hij denkt graag mee en schiet ook snel in actie. Enkel maar positieve ervaringen dus!”",
        attachments: [
          {
            name: "Website",
            url: "https://www.rootzbarber.com/"
          }
        ],
      },
      year: "2020-2021",
      img: "rootz.jpg",
      category: "Website"
    }

    let phpProject: Project = {
      id: "php",
      title: "Project PHP",
      subTitle: "Web applicatie voor een freerunning club",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2020-2021",
      img: "php.jpg",
      category: "School project"
    }

    let wpfProject: Project = {
      id: "wpf",
      title: "WPF Schaken",
      subTitle: "WPF applicatie bordspel: schaken",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2020-2021",
      img: "wpf.jpg",
      category: "School project"
    }

    let idkdProject: Project = {
      id: "idkd",
      title: "In Den Kleyne Doorenboom",
      subTitle: "Website voor een brasserie",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2020-2021",
      img: "idkd.png",
      category: "Website"
    }

    let drfProject: Project = {
      id: "drf",
      title: "DRforces",
      subTitle: "Website voor een drone hobbypiloot",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2020-2021",
      img: "drf.jpg",
      category: "Website"
    }

    let caProject: Project = {
      id: "ca",
      title: "Cordova App",
      subTitle: "Project Cordova: Muziek speler",

      content: {
        about: "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [{name: "", url: ""}]
      },

      year: "2020-2021",
      img: "ca.jpg",
      category: "School project"
    }

    this.projects.push(shopProject);
    this.projects.push(todoProject);
    this.projects.push(rootzProject);
    this.projects.push(phpProject);
    this.projects.push(wpfProject);
    this.projects.push(idkdProject);
    this.projects.push(drfProject);
    this.projects.push(caProject);
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | null {
    return this.projects.find(p => p.id === id) ?? null;
  }
}
