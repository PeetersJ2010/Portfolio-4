import {Attachment} from "./attachment";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  content: {
    about: string,
    contribution: string,
    images: string[],
    verdict: string,
    attachments: Attachment[]
  };
  year: string;
  img: string;
  category: string;
}
