// this file is used to communicate with sanity
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "64t1x6lq", // projectId can be found in portfolio/src/studio/package.json or at manage.sanity.io
  dataset: "production"
});