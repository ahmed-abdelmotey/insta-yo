/**
 * This service is responsible for mapping the raw objects recieved from api
 * into objects used through out the application.
 *
 * note: keep functions here exported in order to be able to test them.
 */

import moment from 'moment';

/**
 * Truncate text if larger than the length provided and add 3 dots at the end of it
 * @param {String} text
 * @param {Number} maxLength
 */
export const truncateTextWithMaxLength = (text, maxLength) => {
  if (text.length < maxLength) {
    return text;
  }

  return `${text.substr(0, maxLength - 4)} ...`;
};

/**
 * Parse duration string
 * @param {String} durationString sting with item duration
 * sample: PT32M12S
 * todo: check parsing hours
 */
export const parseVideoDuration = (durationString) => {
  const regex = new RegExp(/PT(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/g);
  const [, ...match] = regex.exec(durationString);
  // console.log(match);
  return match.filter((t) => t !== undefined).join(':');
  // return `${match[1]}:${match[2]}`;
};

/**
 * Dictionary of different entities types returned from the API
 */
export const ITEMS_TYPES = {
  VIDEO: 'youtube#video',
  CHANNEL: 'youtube#channel',
  PLAYLIST: 'youtube#playlist',
};

/**
 * maps the raw object to object used inside the app
 * @param {Object} item as recieved from youtube APIs
 * todo: add classes for the objects needed or interfaces in case of typescript
 * todo: split this into multiple files when the file grows.
 */
const mapItemToVideo = ({
  id, kind, snippet, statistics, contentDetails,
}) => ({
  id,
  kind,
  title: snippet.title,
  thumbnail: {
    small: snippet.thumbnails.default.url,
    medium: snippet.thumbnails.medium.url,
  },
  channelName: snippet.channelTitle,
  publishDate: snippet.publishedAt,
  publishDateRelative: moment(snippet.publishedAt).fromNow(),
  description: truncateTextWithMaxLength(snippet.description, 400),
  views: statistics && statistics.viewCount,
  duration: contentDetails && parseVideoDuration(contentDetails.duration),
});

/**
 * channel item
 * @param {Object} item
 */
const mapItemToChannel = ({ id, kind, snippet }) => ({
  id,
  kind,
  title: snippet.title,
  thumbnail: {
    small: snippet.thumbnails.default.url,
    medium: snippet.thumbnails.medium.url,
  },
  channelName: snippet.channelTitle,
  publishDate: snippet.publishedAt,
  publishDateRelative: moment(snippet.publishedAt).fromNow(),
  description: truncateTextWithMaxLength(snippet.description, 400),
});

/**
 * playlist item
 * @param {Object} item
 */
const mapItemToPlaylist = ({ id, kind, snippet }) => ({
  id,
  kind,
  title: snippet.title,
  thumbnail: {
    small: snippet.thumbnails.default.url,
    medium: snippet.thumbnails.medium.url,
  },
  channelName: snippet.channelTitle,
  publishDate: snippet.publishedAt,
  publishDateRelative: moment(snippet.publishedAt).fromNow(),
  description: truncateTextWithMaxLength(snippet.description, 400),
});

/**
 * search items could be videos or channels or playlists
 * maps different items to the same interface used across application
 * @param {Object} item
 */
const mapSearchItem = (item) => {
  if (item.id.kind === ITEMS_TYPES.VIDEO) {
    return mapItemToVideo({ ...item, id: item.id.videoId, kind: item.id.kind });
  }

  if (item.id.kind === ITEMS_TYPES.CHANNEL) {
    return mapItemToChannel({ ...item, id: item.id.channelId, kind: item.id.kind });
  }

  if (item.id.kind === ITEMS_TYPES.PLAYLIST) {
    return mapItemToPlaylist({ ...item, id: item.id.playlistId, kind: item.id.kind });
  }

  return null;
};

const mapperService = {
  mapItemToVideo,
  mapSearchItem,
};

export default mapperService;
