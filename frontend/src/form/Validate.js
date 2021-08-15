export default function validateInfo(values) {
  let name = {}
  let errors = {};

  if (!values.id.trim()) {
    errors.id = 'Id required';
  }

  if (!values.name.given) {
    name.given = 'First Name is required';
    errors.name = name;
  }

  if (!values.name.surname) {
    name.surname = 'Surname is required';
    errors.surname = name;
  }

  if (!values.age) {
    errors.age = 'Age is required';
  }

  if (!values.points) {
    errors.points = 'Points is required';
  }
  return errors;
}