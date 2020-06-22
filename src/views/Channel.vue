<template>
  <div class="l-constrained">
    <Spinner v-if="!details" />
    <ChannelInfo v-if="details" :channel="details"/>

    <Spinner v-if="details && !playlists" />

    <ItemsList v-if="playlists" :items="playlists"/>

  </div>
</template>

<script>
import api from '@/services/helpers/api.service';
import mapperService from '@/services/mapper.service';

import ChannelInfo from '@/components/ChannelInfo.vue';
import ItemsList from '@/components/ItemsList.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Channel',
  components: {
    ChannelInfo,
    ItemsList,
    Spinner,
  },
  data() {
    return {
      details: null,
      loading: true,
      playlists: null,
      playlistsLoading: true,
    };
  },
  mounted() {
    api.getChannelDetails(this.$route.params.channelId).then((channelDetailsRes) => {
      if (channelDetailsRes.ok) {
        this.loading = false;
        this.details = mapperService.mapChannelDetails(channelDetailsRes.data.items[0]);
      }
    });

    api.getChannelPlaylists(this.$route.params.channelId).then((channelPlaylistsRes) => {
      if (channelPlaylistsRes.ok) {
        this.playlistsLoading = false;
        this.playlists = channelPlaylistsRes.data.items.map(mapperService.mapItemToPlaylist);
      }
    });
  },
  watch: {
    $route() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>
