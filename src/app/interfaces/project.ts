import {Attachment} from "./attachment";

export interface Project {
  id: string;
  visible: boolean,
  title: string;
  subTitle: string;
  content: {
    alert?: Alert,
    languages?: LanguageType[],
    about: string,
    contribution: string,
    images: string[],
    verdict: string,
    attachments: Attachment[]
  };
  year: string;
  img: string;
  category: ProjectType;
}

export interface Alert{
  title?: string;
  content: string;
}

export class LanguageType{
  icon: string;
  title: string;

  constructor(t: string, i: string){
    this.icon = "assets/projects/languages/" + i;
    this.title = t;
  }
}

export class LanguageTypes {
  static html5 = new LanguageType("Html 5", "html5.png");
  static scss = new LanguageType("SCSS", "scss.png");
  static angular = new LanguageType("Angular", "angular.png");
  static dotNet = new LanguageType(".NET", "dotnet.png");
  static laravel = new LanguageType("Laravel", "laravel.png");
  static wpf = new LanguageType("WPF", "wpf.png");
  static csharp = new LanguageType("C#", "csharp.png");
  static cordova = new LanguageType("Cordova", "cordova.png");
  static js = new LanguageType("Javascript", "js.png");
  static ts = new LanguageType("Typescript", "ts.png");
  static php = new LanguageType("PHP", "php.png");

  static powerapp = new LanguageType("Power Apps", "powerapp.png");
  static powerautomate = new LanguageType("Power Automate", "powerautomate.png");
  static azure = new LanguageType("Microsoft Azure", "azure.png");
}

export class ProjectType{
  title: string;

  constructor(t: string){
    this.title = t;
  }
}

export class ProjectTypes {
  static website = new ProjectType("Website");
  static school = new ProjectType("School project");
}


