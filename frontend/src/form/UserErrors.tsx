import UserName from './UserName';

export default class UserErrors {
  name?: UserName;
  points?: string;
  age?: string;

  isUndefined(): boolean {
    return this.name?.given === undefined &&
      this.name?.surname === undefined &&
      this.points === undefined &&
      this.age === undefined
      ? true
      : false;
  }
}
