export class AppStatusDTO {
  status: string;
  version: string;
  uptime: number;
  timestamp: Date;

  constructor(status: string, version: string, uptime: number, timestamp: Date) {
    this.status = status;
    this.version = version;
    this.uptime = uptime;
    this.timestamp = timestamp;
  }
}
