import React, { useState } from 'react';
import DBUser from './DBUser';
import DeleteUser from './DeleteUser';

type UserProps = {
  users: DBUser[];
};

const User: React.FC<UserProps> = ({ users }) => {
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [deletedUsers, setDeletedUsers] = useState<number[]>([]);

  const changeButtonState = (num: number) => {
    setDeletedUsers((prevUsers: number[]) => [...prevUsers, num]);
    setButtonState(true);
  };

  return (
    <tbody>
      {users.map((user) => (
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
      ))}
    </tbody>
  );
};

export default User;
