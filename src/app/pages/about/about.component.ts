import { Component, OnInit } from '@angular/core';
import {Attachment, AttachmentTypes} from "../../interfaces/attachment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cv: Attachment = {url: "assets/download/cv-joppepeeters.pdf", type: AttachmentTypes.website, name:"Mijn cv"}

  constructor() { }

  ngOnInit(): void {
  }

}
