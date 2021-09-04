import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const env = process.env;

interface Variables {
  readonly BACKEND_URL: string;
  readonly USERS_ENDPOINT: string;
  readonly ANIMALS_ENDPOINT: string;
}

const Envs: Variables = {
  BACKEND_URL: `http://${env.REACT_APP_BACKEND_HOST_NAME || 'localhost'}:${
    env.REACT_APP_BACKEND_PORT || 8080
  }`,
  USERS_ENDPOINT: `${env.REACT_APP_BACKEND_USERS_ENDPOINT}`,
  ANIMALS_ENDPOINT: `${env.REACT_APP_BACKEND_ANIMALS_ENDPOINT}`,
};

console.log(Envs);

export default Envs;
