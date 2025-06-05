export class AuthResponseDTO {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
}
