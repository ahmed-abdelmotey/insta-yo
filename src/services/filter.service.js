import moment from 'moment';

/**
 * get filters dictionary
 */
export const getFilters = () => {
  const currentDate = moment();
  return {
    DATE: {
      title: 'Upload Date',
      apiProp: 'publishedAfter',
      options: [
        { title: 'Last hour', value: currentDate.subtract(1, 'hour').toISOString() },
        { title: 'Today', value: currentDate.subtract(1, 'day').toISOString() },
        { title: 'This week', value: currentDate.subtract(1, 'week').toISOString() },
        { title: 'This month', value: currentDate.subtract(1, 'month').toISOString() }],
      required: false,
      selectedValue: null,
    },
    TYPE: {
      title: 'Type',
      apiProp: 'type',
      options: [{ title: 'Video', value: 'video' }, { title: 'Channel', value: 'channel' }, { title: 'Playlist', value: 'playlist' }],
      required: false,
      selectedValue: null,
    },
    ORDER: {
      title: 'Sort by',
      apiProp: 'order',
      options: [{ title: 'Relevance', value: 'relevance' }, { title: 'Upload date', value: 'date' }, { title: 'View count', value: 'viewCount' }, { title: 'Rating', value: 'rating' }],
      required: true,
      defaultValue: 'relevance',
      selectedValue: 'relevance',
    },
  };
};

export const getFiltersRequestObject = (filters) => Object.values(filters).reduce((acc, f) => {
  acc[f.apiProp] = f.selectedValue;
  return acc;
}, {});
