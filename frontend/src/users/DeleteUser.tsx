import React from 'react';
import Envs from '../util/Envs';
import axios from 'axios';

type DeleteProps = {
  buttonState: boolean;
  changeButtonState: (n: number) => void;
  id: number;
  deletedUsers: number[];
};

const DeleteUser: React.FC<DeleteProps> = ({
  buttonState,
  changeButtonState,
  id,
  deletedUsers,
}) => {
  let endpoint = `${Envs.USERS_ENDPOINT}/${id}`;

  const request = async () => {
    const res = await axios.delete(endpoint);

    if (res.status >= 200 && res.status < 400) {
      changeButtonState(id);
    }
  };

  return (
    <>
      {buttonState && deletedUsers.includes(id) ? (
        <button type="button" className="btn btn-secondary" disabled>
          Deleted
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => request()}
        >
          Delete
        </button>
      )}
    </>
  );
};

export default DeleteUser;
