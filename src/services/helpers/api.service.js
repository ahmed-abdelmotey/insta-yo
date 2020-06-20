import apisauce from 'apisauce';
import debugConfig from '@/config/debug.config';
import fixtureApiService from './fixture.api.service';

const create = (baseURL = 'https://www.googleapis.com/youtube/v3') => {
  const api = apisauce.create({
    baseURL,
    // Add any custom configuration needed here
  });

  /**
   * Add API Key to all requests
   */
  api.addRequestTransform(async (request) => {
    // eslint-disable-next-line no-param-reassign
    request.params = {
      ...request.params,
      // TODO: In a real world app, API keys should be stored in a BE server
      key: process.env.VUE_APP_API_KEY,
    };
  });

  const getTrendingVideos = () => api.get('/videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'US',
  });

  return {
    getTrendingVideos,
  };
};

// control hitting mock api or the real api by setting the "useFixture" config
const api = debugConfig.useFixtures ? fixtureApiService : create();
export default api;
