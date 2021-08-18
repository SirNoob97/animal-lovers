import React from 'react';

const User = (users) => {
  return (
    <tbody>
      {
        users.map(user => (
          <tr key={user.userId}>
            <td>{user.given}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>{user.points}</td>
            <td>delete</td>
          </tr>
        ))
      }
    </tbody>
  )
};

export default User