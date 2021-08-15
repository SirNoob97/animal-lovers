import React from 'react';
import useForm from './Use';
import validate from './Validate';
import './Form.css';

const CreateUserForm = ({ createUserForm }) => {
  const { handleChange, handleNameChange, handleSubmit, values, errors } = useForm(
    createUserForm,
    validate
  );

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Animal Lover
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Id</label>
          <input
            className='form-input'
            type='text'
            name='id'
            placeholder='Enter the id'
            value={values.id}
            onChange={handleChange}
          />
          {errors.id && <p>{errors.id}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>First name</label>
          <input
            className='form-input'
            type='text'
            name='given'
            placeholder='First name'
            value={values.name.given}
            onChange={event => handleNameChange(event, values.name)}
          />
          {errors.name && <p>{errors.name.given}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Surname</label>
          <input
            className='form-input'
            type='text'
            name='surname'
            placeholder='Surname'
            value={values.name.surname}
            onChange={event => handleNameChange(event, values.name)}
          />
          {errors.name && <p>{errors.name.surname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Age</label>
          <input
            className='form-input'
            type='numer'
            name='age'
            placeholder='Age'
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Points</label>
          <input
            className='form-input'
            type='numer'
            name='points'
            placeholder='Points'
            value={values.points}
            onChange={handleChange}
          />
          {errors.points && <p>{errors.points}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;