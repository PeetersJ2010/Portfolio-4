import {Component, Input, OnInit} from '@angular/core';
import {Attachment, AttachmentTypes} from "../../interfaces/attachment";

@Component({
  selector: 'app-project-attachment',
  templateUrl: './project-attachment.component.html',
  styleUrls: ['./project-attachment.component.scss']
})
export class ProjectAttachmentComponent implements OnInit {

  @Input() attachment: Attachment = {name: "", type: AttachmentTypes.website, url: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
