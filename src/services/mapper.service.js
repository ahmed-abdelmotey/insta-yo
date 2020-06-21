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
 * maps the raw object to object used inside the app
 * @param {Object} item as recieved from youtube APIs
 * todo: add classes for the objects needed or interfaces in case of typescript
 * todo: split this into multiple files when the file grows.
 */
const mapItemToVideo = (item) => ({
  id: item.id,
  title: item.snippet.title,
  thumbnail: {
    small: item.snippet.thumbnails.default.url,
    medium: item.snippet.thumbnails.medium.url,
  },
  channelName: item.snippet.channelTitle,
  views: item.statistics.viewCount,
  duration: parseVideoDuration(item.contentDetails.duration), // FIXME: Needs to be parsed
  publishDate: item.snippet.publishedAt,
  publishDateRelative: moment(item.snippet.publishedAt).fromNow(),
  description: truncateTextWithMaxLength(item.snippet.description, 400),
});

const mapperService = {
  mapItemToVideo,
};

export default mapperService;
