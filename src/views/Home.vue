<template>
  <div class="home">
    <font-awesome-icon class="c-spinner" v-if="loading" :icon="['fa', 'spinner']" spin size="2x" />
    <FilterBar v-if="items && items.length > 0"
        :count="totalResults" @update="filterResults($event)"/>
    <ItemsList v-if="items && items.length > 0" :items="items"/>
    <LoadMore v-if="items && items.length > 0" @load="loadMore"/>
    <font-awesome-icon class="c-spinner"
      v-if="loadingMore" :icon="['fa', 'spinner']" spin size="2x" />
  </div>
</template>

<script>
import api from '@/services/helpers/api.service';
import mapperService from '@/services/mapper.service';
import ItemsList from '@/components/ItemsList.vue';
import FilterBar from '@/components/FilterBar.vue';
import LoadMore from '@/components/LoadMore.vue';

export default {
  name: 'Home',
  components: {
    ItemsList,
    FilterBar,
    LoadMore,
  },
  data() {
    return {
      loading: true,
      loadingMore: false,
      items: [],
      nextPage: null,
      totalResults: null,
    };
  },
  methods: {
    loadMore() {
      this.loadingMore = true;
      this.runSearch(null, this.nextPage);
    },
    mapResults(resData, itemsMapperFunction, appendItems) {
      this.loading = false;
      this.nextPage = resData.nextPageToken;
      this.totalResults = resData.pageInfo.totalResults;
      const newItems = resData.items.map(itemsMapperFunction);
      this.items = appendItems ? [...this.items, ...newItems] : newItems;
      this.loadingMore = false;
    },
    filterResults(filterCriteria) {
      this.runSearch(filterCriteria);
    },
    runSearch(filters, pageToken) {
      api.getSearchResults(this.$route.query.query, filters, pageToken).then((res) => {
        if (res.ok) {
          this.mapResults(res.data, mapperService.mapSearchItem, pageToken);
        }
      });
    },
  },
  mounted() {
    if (this.$route.query.query) {
      this.runSearch();
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
