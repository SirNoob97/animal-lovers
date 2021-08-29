import User from './User';
import UserErrors from './UserErrors';
import UserName from './UserName';

export default function validateInfo(user: User): UserErrors {
  let userName = new UserName();
  let errors = new UserErrors();

  if (user.name !== undefined) {
    if (!userName.given) {
      userName.given = 'First Name is required';
    }

    if (!userName.surname) {
      userName.surname = 'Surname is required';
    }

    errors.name = userName;
  }

  if (!user.age) {
    errors.age = 'Age is required';
  }

  if (!user.points) {
    errors.points = 'Points is required';
  }
  return errors;
}
