const mapItemToVideo = (item) => ({
  id: item.id,
  title: item.snippet.title,
  thumbnail: item.snippet.thumbnails.default,
  channelName: item.snippet.channelTitle,
  views: item.statistics.viewCount,
  duration: item.contentDetails.duration, // FIXME: Needs to be parsed
  publishDate: item.snippet.publishedAt,
});

console.log(mapItemToVideo({
  kind: 'youtube#video',
  etag: 'wn5vqVBYqru0lwG_mB5abjRCJ2w',
  id: 'MZfeSvkhQr8',
  snippet: {
    publishedAt: '2020-06-18T21:00:06Z',
    channelId: 'UCV9_KinVpV-snHe3C3n1hvA',
    title: 'The Demon In My House',
    description: "New Merch! :)  https://www.shanedawsonmerch.com/ \nMy Main Channel https://www.youtube.com/shane \nFollow Andrew Siwicki https://www.instagram.com/andrewsiwicki/?hl=en\nSubscribe to Ryland https://www.youtube.com/channel/UC0CG8Kj2DqFc9bJld0hJKBA\nTrainer With Jess  https://coachkiltstraining.com/\nJess Instagram https://instagram.com/coachkiltstraining?igshid=43u6wjowczsb\n\nCreators Featured\nInside Edition https://www.youtube.com/user/cbstvdinsideedition\ncharli d'amelio https://www.youtube.com/channel/UCi3OE-aN09WOcN9d2stCvPg",
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/MZfeSvkhQr8/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/MZfeSvkhQr8/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/MZfeSvkhQr8/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/MZfeSvkhQr8/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/MZfeSvkhQr8/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    channelTitle: 'shane',
    tags: ['shane', 'dawson', 'journalism', 'investigative journalism', 'docuseries', 'documentary'],
    categoryId: '22',
    liveBroadcastContent: 'none',
    localized: {
      title: 'The Demon In My House',
      description: "New Merch! :)  https://www.shanedawsonmerch.com/ \nMy Main Channel https://www.youtube.com/shane \nFollow Andrew Siwicki https://www.instagram.com/andrewsiwicki/?hl=en\nSubscribe to Ryland https://www.youtube.com/channel/UC0CG8Kj2DqFc9bJld0hJKBA\nTrainer With Jess  https://coachkiltstraining.com/\nJess Instagram https://instagram.com/coachkiltstraining?igshid=43u6wjowczsb\n\nCreators Featured\nInside Edition https://www.youtube.com/user/cbstvdinsideedition\ncharli d'amelio https://www.youtube.com/channel/UCi3OE-aN09WOcN9d2stCvPg",
    },
  },
  contentDetails: {
    duration: 'PT32M12S',
    dimension: '2d',
    definition: 'sd',
    caption: 'false',
    licensedContent: true,
    contentRating: {},
    projection: 'rectangular',
  },
  statistics: {
    viewCount: '4032120',
    likeCount: '421824',
    dislikeCount: '12732',
    favoriteCount: '0',
    commentCount: '67206',
  },
}));

const mapperService = {
  mapItemToVideo,
};

export default mapperService;
