import React, {useState} from 'react';
import DeleteUser from './DeleteUser';

const User = ({ users }) => {
  const [buttonState, setButtonState] = useState(false);
  const [deletedUsers, setDeletedUsers ]= useState([]);

  const changeButtonState = (num) => {
    setDeletedUsers((prevUsers) => [
      ...prevUsers,
      num
    ]);
    setButtonState(true);
  }

  return (
    <tbody>
      {
        users.map(user => (
          <tr key={user.userId}>
            <td>{user.given}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>{user.points}</td>
            <td>
              <DeleteUser
                buttonState={buttonState}
                changeButtonState={changeButtonState}
                id={user.userId}
                deletedUsers={deletedUsers}
            />
            </td>
          </tr>
        ))
      }
    </tbody>
  )
};

export default User;
