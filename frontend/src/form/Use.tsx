import { useEffect, useState, ChangeEvent } from 'react';
import User from './User';
import UserName from './UserName';
import UserErrors from './UserErrors';
import axios from 'axios';

const url = 'http://localhost:8080/users'

const emptyUser = ():User => {
    const user = new User();
    user.name = new UserName();
    user.animals = [];
    user.isActive = true;
    return user;
  }

const useForm = (callback: () => void, validate: (u: User) => UserErrors) => {
  const [user, setUser] = useState<User>(emptyUser());
  const [errors, setErrors] = useState<UserErrors>(new UserErrors());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>, obj: UserName) => {
    const { name, value } = e.target;
    if (name === 'given'){
      obj.given = value;
    } else {
      obj.surname = value;
    }

    setUser({
      ...user,
      name: obj
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setErrors(validate(user));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await axios.post(url, user);
        if (res.status >= 200 && res.status < 400) {
          callback();
        }
      };

      if (errors.isUndefined() && isSubmitting) {
        fetchData();
      }
    },
    [callback, isSubmitting, user, errors]
  );
  return { handleChange, handleNameChange, handleSubmit, user, errors };
};

export default useForm;
