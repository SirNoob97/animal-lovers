import React from 'react';
import axios from 'axios';

type DeleteProps = {
  buttonState: boolean;
  changeButtonState: (n: number) => void;
  id: number;
  deletedUsers: number[];
}

const DeleteUser: React.FC<DeleteProps> = ({buttonState,
                    changeButtonState,
                    id,
                    deletedUsers}) => {

  let url = `http://localhost:8080/users/${id}`;

  const request = async () => {
    const res = await axios.delete(url)
    
    if (res.status >= 200 && res.status < 400){
      changeButtonState(id);
    }
  }

  return (
    <>
    { (buttonState && deletedUsers.includes(id)) 
      ? (<button type="button" className="btn btn-secondary" disabled>Deleted</button>)
      : (<button type="button" className="btn btn-danger" onClick={() => request()} >Delete</button>)
    }
    </>
  )

};

export default DeleteUser;
