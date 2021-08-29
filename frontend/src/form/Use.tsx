import { useEffect, useState, ChangeEvent } from 'react';
import User from './User';
import UserName from './UserName';
import UserErrors from './UserErrors';
import axios from 'axios';

const url = 'http://localhost:8080/users'

const useForm = (callback: () => void, validate: (u: User) => UserErrors) => {
  const [user, setUser] = useState<User>(new User());
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
    console.log(e.target)
    obj[name] = value;
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

      if (Object.keys(errors).length === 0 && isSubmitting) {
        fetchData();
      }
    },
    [callback, isSubmitting, user, errors]
  );
  return { handleChange, handleNameChange, handleSubmit, user, errors };
};

export default useForm;
