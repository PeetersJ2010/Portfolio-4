export class AttachmentType{
  type: string;
  icon?: string;

  constructor(s: string, i?: string) {
    this.type = s;
    this.icon = i;
  }
}

export interface Attachment{
  name: string,
  url: string,
  type: AttachmentType,
}

export class AttachmentTypes {
  static github = new AttachmentType("github", "github");
  static website = new AttachmentType("website", "link-45deg");
  static download = new AttachmentType("download", "download");
  static email = new AttachmentType("email", "envelope");
}


