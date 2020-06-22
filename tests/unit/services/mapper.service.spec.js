import mapperService, {
  truncateTextWithMaxLength, parseVideoDuration, ITEMS_TYPES,
} from '@/services/mapper.service';

describe('Mapper service', () => {
  describe('truncateTextWithMaxLength', () => {
    it('should return string uncut if less than maximum length', () => {
      const str = 'some small string';
      expect(truncateTextWithMaxLength(str, 300)).toBe(str);
    });
    it('should truncate string if larger than maximum length', () => {
      const str = 'some big string';
      expect(truncateTextWithMaxLength(str, 5)).toBe('so...');
    });
  });

  describe('parseVideoDuration', () => {
    it('should return string of hour:minute:second from the given string', () => {
      expect(parseVideoDuration('PT2H32M12S')).toBe('2:32:12');
      expect(parseVideoDuration('PT32M12S')).toBe('32:12');
      expect(parseVideoDuration('PT12S')).toBe('12');
    });
  });

  describe('mapperService', () => {
    it('should return mapped items of different types', () => {
      const unMappedItems = [{
        kind: 'youtube#searchResult',
        etag: 'j2OL1OEpLGE2rHgNErSpKfuCvfw',
        id: {
          kind: 'youtube#video',
          videoId: '0bKVpc8U2go',
        },
        contentDetails: {
          duration: 'PT12S',
          dimension: '2d',
          definition: 'hd',
          caption: 'false',
          licensedContent: true,
          contentRating: {},
          projection: 'rectangular',
        },
        statistics: {
          viewCount: '9573679',
          likeCount: '1207906',
          dislikeCount: '18132',
          favoriteCount: '0',
          commentCount: '74430',
        },
        snippet: {
          publishedAt: '2019-04-11T10:00:00Z',
          channelId: 'UCx27Pkk8plpiosF14qXq-VA',
          title: 'Top 13 Krabby Patty Moments! 🍔 #TBT | SpongeBob',
          description: "It's the Krabby Patty in all its glory! Here's the best moments of the finest burger under the sea! Watch more of your favorite shows on Nick! ▻▻ Subscribe for ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/0bKVpc8U2go/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/0bKVpc8U2go/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/0bKVpc8U2go/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'SpongeBob SquarePants Official',
          liveBroadcastContent: 'none',
          publishTime: '2019-04-11T10:00:00Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'AarcR83nF8pw8EilSRw26TdLIeY',
        id: {
          kind: 'youtube#channel',
          channelId: 'UCdP8PkMqzEo-JbIEWNpJCVw',
        },
        snippet: {
          publishedAt: '2019-01-16T08:38:49Z',
          channelId: 'UCdP8PkMqzEo-JbIEWNpJCVw',
          title: 'sponge pop',
          description: '',
          thumbnails: {
            default: {
              url: 'https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
            medium: {
              url: 'https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s240-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
            high: {
              url: 'https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s800-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
          },
          channelTitle: 'sponge pop',
          liveBroadcastContent: 'none',
          publishTime: '2019-01-16T08:38:49Z',
        },
      }, {
        kind: 'youtube#searchResult',
        etag: 'PrtOwbAOF2zQw0oJZvs5WftpcX0',
        id: {
          kind: 'youtube#playlist',
          playlistId: 'PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF',
        },
        snippet: {
          publishedAt: '2019-06-11T01:18:42Z',
          channelId: 'UCSNkfKl4cU-55Nm-ovsvOHQ',
          title: 'Learn Git and Github',
          description: 'Learn Git and Github With Practical Examples.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ACOiGZoqC8w/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ACOiGZoqC8w/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/ACOiGZoqC8w/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Elzero Web School',
          liveBroadcastContent: 'none',
          publishTime: '2019-06-11T01:18:42Z',
        },
      }, {
        id: {
          kind: 'unmatchedKey',
        },
      }];

      const mappedItems = unMappedItems.map(mapperService.mapSearchItem);

      expect(mappedItems[0].kind).toBe(ITEMS_TYPES.VIDEO);
      expect(mappedItems[1].kind).toBe(ITEMS_TYPES.CHANNEL);
      expect(mappedItems[2].kind).toBe(ITEMS_TYPES.PLAYLIST);
      expect(mappedItems[3]).toBe(null);
    });
  });
});
