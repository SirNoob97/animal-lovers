import UserName from './UserName';

export default class UserErrors{
  name?: UserName;
  points?: string;
  age?: string;


  isEmpty(errors: UserErrors): boolean {
    return Object.keys(errors).length === 0 ? true : false;
  }
}
