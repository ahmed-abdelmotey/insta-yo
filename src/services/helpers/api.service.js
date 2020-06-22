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

  const getTrendingVideos = (pageToken) => api.get('/videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    maxResults: 10,
    pageToken,
  });

  const getSearchResults = (q = '', params = {}, pageToken) => api.get('/search', {
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 10,
    q,
    pageToken,
    ...params,
  });

  const getVideoDetails = (id, pageToken) => api.get('/videos', {
    part: 'snippet,contentDetails,statistics',
    pageToken,
    id,
  });

  return {
    getTrendingVideos,
    getSearchResults,
    getVideoDetails,
  };
};

// control hitting mock api or the real api by setting the "useFixture" config
const api = debugConfig.useFixtures ? fixtureApiService : create();
export default api;
