import * as dotenv from 'dotenv';

dotenv.config({ path: './../../..env.development' });

interface Variables {
  readonly DEFAULT_BACKEND_URL: string;
  readonly BACKEND_URL: string;
  readonly USERS_ENDPOINT: string;
  readonly ANIMALS_ENDPOINT: string;
}

const Envs: Variables = {
  DEFAULT_BACKEND_URL: `${process.env.REACT_APP_DEFAULT_BACKEND_URL}`,
  BACKEND_URL: `${process.env.REACT_APP_BACKEND_URL}`,
  USERS_ENDPOINT: `${process.env.REACT_APP_BACKEND_USERS_ENDPOINT}`,
  ANIMALS_ENDPOINT: `${process.env.REACT_APP_BACKEND_ANIMALS_ENDPOINT}`,
};

export default Envs;
