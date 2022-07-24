/**
 *
 * @returns https://ezmto if in production env. Localhost if in dev env
 */
const routerConfig = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://ezmto'
    : 'http://localhost:4000';
};

export default routerConfig;
