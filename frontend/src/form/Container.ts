import React, { useState } from 'react';
import CreateUserForm from './CreateUserForm';
import Success from './Success';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitedForm() {
    setIsSubmitted(true);
  }
  return (
    <div className=' container-lg position-absolute top-50 start-50 translate-middle w-50 h-75 rounded-3 bg-dark'>
      {!isSubmitted ? (
        <CreateUserForm createUserForm={submitedForm} />
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Form;
