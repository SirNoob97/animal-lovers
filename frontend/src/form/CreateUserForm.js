import React from 'react';
import useForm from './Use';
import validate from './Validate';

const CreateUserForm = ({ createUserForm }) => {
  const { handleChange, handleNameChange, handleSubmit, user, errors } = useForm(
    createUserForm,
    validate
  );

  return (
    <div className='position-relative top-50 start-50 translate-middle w-50'>
      <form className='text-light' onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className='text-center'>
            Animal Lover
          </legend>
          <div className='mb-3'>
            <label className='form-label fs-6'>First name</label>
            <input
              className='form-control'
              type='text'
              name='given'
              placeholder='First name'
              value={user.name.given}
              onChange={event => handleNameChange(event, user.name)}
            />
            {errors.name && <p className='text-danger'>{errors.name.given}</p>}
          </div>
          <div className='mb-3'>
            <label className='form-label fs-6'>Surname</label>
            <input
              className='form-control'
              type='text'
              name='surname'
              placeholder='Surname'
              value={user.name.surname}
              onChange={event => handleNameChange(event, user.name)}
            />
            {errors.name && <p className='text-danger'>{errors.name.surname}</p>}
          </div>
          <div className='mb-3'>
            <label className='form-label fs-6'>Age</label>
            <input
              className='form-control'
              type='numer'
              name='age'
              placeholder='Age'
              value={user.age}
              onChange={handleChange}
            />
            {errors.age && <p className='text-danger'>{errors.age}</p>}
          </div>
          <div className='mb-3'>
            <label className='form-label fs-6'>Points</label>
            <input
              className='form-control'
              type='numer'
              name='points'
              placeholder='Points'
              value={user.points}
              onChange={handleChange}
            />
            {errors.points && <p className='text-danger'>{errors.points}</p>}
          </div>
          <div className='position-relative top-100 start-50 translate-middle-x w-50'>
            <button className='position-relative top-100 start-50 translate-middle-x mb-3 btn btn-primary'
                    type='submit'>
              Create
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateUserForm;
