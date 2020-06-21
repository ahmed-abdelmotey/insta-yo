<template>
  <div class="home">
    <font-awesome-icon class="c-spinner" v-if="loading" :icon="['fa', 'spinner']" spin size="2x" />
    <ItemsList v-if="items && items.length > 0" :items="items"/>
  </div>
</template>

<script>
import api from '@/services/helpers/api.service';
import mapperService from '../services/mapper.service';
import ItemsList from '../components/ItemsList.vue';

export default {
  name: 'Home',
  components: {
    ItemsList,
  },
  data() {
    return {
      loading: true,
      items: [],
      nextPage: null,
      totalResults: null,
    };
  },
  methods: {
    mapResults(resData, itemsMapperFunction) {
      this.loading = false;
      this.nextPage = resData.nextPageToken;
      this.items = resData.items.map(itemsMapperFunction);
      this.totalResults = resData.pageInfo.totalResults;
      console.log(this.items);
    },
  },
  mounted() {
    if (this.$route.query.query) {
      api.getSearchResults(this.$route.query.query).then((res) => {
        if (res.ok) {
          this.mapResults(res.data, mapperService.mapSearchItem);
        }
      });
    } else {
      api.getTrendingVideos().then((res) => {
        if (res.ok) {
          this.mapResults(res.data, mapperService.mapItemToVideo);
        }
      });
    }
  },
};

</script>
