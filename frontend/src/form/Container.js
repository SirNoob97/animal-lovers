import React, { useState } from 'react';
import './Form.css';
import CreateUserForm from './CreateUserForm';
import Success from './Success';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitedForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='form-container'>
      {!isSubmitted ? (
        <CreateUserForm createUserForm={submitedForm} />
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Form;