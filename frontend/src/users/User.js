import React, { useState } from 'react';

const User = (values) => {
  const startIndex = (values.page - 1) * values.size;
  const selectedUsers = values.users.slice(startIndex, startIndex + values.size);

  return (
    <tbody>
      {
        selectedUsers.map(user => (
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