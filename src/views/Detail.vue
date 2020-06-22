<template>
  <div class="l-constrained" key="this.$route.params.videoId">
    <Spinner v-if="!video" />

    <VideoEmbed v-if="video" :videoId="this.$route.params.videoId"/>
    <VideoPanel v-if="video" :video="video" />

    <Spinner v-if="video && relatedItems.length === 0" />

    <ItemsList v-if="relatedItems.length > 0" :items="relatedItems"/>

    <LoadMore v-if="relatedItems.length > 0" @load="loadMore"/>
    <Spinner v-if="loadingMore" />

  </div>
</template>

<script>
import api from '@/services/helpers/api.service';
import mapperService from '@/services/mapper.service';
import VideoEmbed from '@/components/VideoEmbed.vue';
import VideoPanel from '@/components/VideoPanel.vue';
import ItemsList from '@/components/ItemsList.vue';
import Spinner from '@/components/Spinner.vue';
import LoadMore from '@/components/LoadMore.vue';

export default {
  name: 'Detail',
  components: {
    Spinner,
    VideoEmbed,
    VideoPanel,
    ItemsList,
    LoadMore,
  },
  data() {
    return {
      video: null,
      relatedItems: [],
      loadingMore: false,
      nextPageToken: null,
    };
  },
  watch: {
    $route() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  mounted() {
    api.getVideoDetails(this.$route.params.videoId).then((res) => {
      if (res.ok) {
        this.video = mapperService.mapItemToVideo(res.data.items[0]);

        api.getSearchResults('', { relatedToVideoId: this.$route.params.videoId }).then((relatedVideoRes) => {
          if (relatedVideoRes.ok) {
            this.relatedItems = relatedVideoRes.data.items.map(mapperService.mapSearchItem);
            this.nextPageToken = relatedVideoRes.data.nextPageToken;
          }
        });
      }
    });
  },
  methods: {
    loadMore() {
      this.loadingMore = true;
      api.getSearchResults(
        null,
        { relatedToVideoId: this.$route.params.videoId },
        this.nextPageToken,
      ).then((extraVideosRes) => {
        if (extraVideosRes.ok) {
          this.relatedItems = [
            ...this.relatedItems,
            ...extraVideosRes.data.items.map(mapperService.mapSearchItem),
          ];
          this.nextPageToken = extraVideosRes.data.nextPageToken;
          this.loadingMore = false;
        }
      });
    },
  },
};
</script>
