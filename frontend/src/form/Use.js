import { useEffect, useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    id: '',
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
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleNameChange = (e, obj) => {
    const { name, value } = e.target;
    obj[name] = value;
    setValues({
      ...values,
      name: obj
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      console.log('effect')
      console.log(Object.values(errors).length)
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );
  return { handleChange, handleNameChange, handleSubmit, values, errors };
};

export default useForm;