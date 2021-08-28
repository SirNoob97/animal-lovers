import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8080/users'

const useForm = (callback, validate) => {
  const [user, setUser] = useState({
    name: {
      given: '',
      surname: ''
    },
    points: 0,
    animals: [],
    isActive: true,
    age: 0
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleNameChange = (e, obj) => {
    const { name, value } = e.target;
    obj[name] = value;
    setUser({
      ...user,
      name: obj
    });
  };

  const handleSubmit = e => {
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