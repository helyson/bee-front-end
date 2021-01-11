interface User {
  id?: number;
  name: string;
  description: string;
  photo: string;
}
export class UserClass implements User {
  id?: number;
  name: string;
  description: string;
  photo: string;
  constructor() {
    this.name = "";
    this.description = "";
    this.photo = "";
  }
}
export type { User };
