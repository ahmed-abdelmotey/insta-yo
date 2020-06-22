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
    const searchResults = fetch('/mocks/searchResults2.json');
    return searchResults.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
  getVideoDetails: () => {
    const videoData = fetch('/mocks/videoDetails.json');
    return videoData.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
  getChannelDetails: () => {
    const channelData = fetch('/mocks/channelDetails.json');
    return channelData.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
  getChannelSections: () => {
    const channelSections = fetch('/mocks/channelSections.json');
    return channelSections.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },
  getChannelPlaylists: () => {
    const channelPlaylists = fetch('/mocks/channelPlaylists.json');
    return channelPlaylists.then(async (response) => {
      const responseData = await response.json();
      return {
        data: responseData,
        ok: true,
      };
    });
  },

};
