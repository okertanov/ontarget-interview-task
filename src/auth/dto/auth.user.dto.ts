export class AuthUserDTO {
  id: string;
  email: string;
  name: string;
  surname: string;

  constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
}