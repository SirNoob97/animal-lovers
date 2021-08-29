import UserName from './UserName';
import Animal from '../nav/Animal';

export default class User {
  name!: UserName;
  points!: number;
  animals?: Animal[];
  isActive!: boolean;
  age!: number;
}
