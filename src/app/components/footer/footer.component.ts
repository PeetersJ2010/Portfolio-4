import { Component, OnInit } from '@angular/core';
import {Attachment, AttachmentTypes} from "../../interfaces/attachment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  mail : Attachment  = {name: "Email", type: AttachmentTypes.email, url: "mailto:joppepeeters@gmail.com"};

  constructor() { }

  ngOnInit(): void {
  }

}
