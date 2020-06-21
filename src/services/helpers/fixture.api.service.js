/**
 * Dummy API to be used for local development
 */
export default {
  getTrendingVideos: () => {
    const trendingVideos = fetch('/mocks/trendingVideos.json');
    return trendingVideos.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
  getSearchResults: () => {
    const trendingVideos = fetch('/mocks/searchResults.json');
    return trendingVideos.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
};
