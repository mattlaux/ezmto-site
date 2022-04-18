/**
 * Establishes default settings for the seo component
 *
 * graphql and routes objects are commented out as these are
 * currently not in use. May be implemented later on as
 * the SEO strategy develops
 *
 * TODOS:
 *  1. Update social twitter to proper values
 */
const settings = {
  /*
  graphql: {
    uri: 'http://localhost:5001/api/graphql',
  },
  */
  meta: {
    rootUrl: 'https://ezmto',
    title: 'ezMTO',
    description:
      'ezMTO saves time and money by automating and simplifying the material takeoff and bid process.',
    social: {
      graphic: 'https://ezmto.com/images/chemicalPlantSocial.webp',
      twitter: '@cheatcodetuts',
    },
  },
  /*
  routes: {
    authenticated: {
      pathAfterFailure: '/login',
    },
    public: {
      pathAfterFailure: '/',
    },
  },
  */
};

export default settings;
