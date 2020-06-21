<template>
<div class="c-item" @click="openDetails">
    <div class="c-item__image">
      <picture>
        <source media="(min-width: 600px)" :srcset="item.thumbnail.medium">
        <img :src="item.thumbnail.small" alt="IfItDoesntMatchAnyMedia">
      </picture>
      <span class="c-item__image__info"> {{ item.duration }} </span>
    </div>

    <div class="c-item__info" >
        <div class="c-item__info__title">{{item.title}}</div>
        <div class="c-item__info__stats">
            <span>{{item.channelName}}</span>
            <span v-if="item.views">{{item.views}} {{ $t('COMPONENTS.ITEM.VIEWS') }}</span>
            <span v-if="item.publishDateRelative"> {{item.publishDateRelative}} </span>
        </div>

        <p class="c-item__info__description" v-html="item.description" />
    </div>
</div>

</template>

<script>
import { ITEMS_TYPES } from '@/services/mapper.service';

export default {
  name: 'Item',
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  methods: {
    openDetails() {
      if (this.item.kind === ITEMS_TYPES.VIDEO) {
        this.$router.push({ name: 'Details', params: { videoId: this.item.id } });
      }

      if (this.item.kind === ITEMS_TYPES.PLAYLIST) {
        this.$router.push({ name: 'Details', params: { videoId: this.item.id }, query: { isPlaylist: true } });
      }

      if (this.item.kind === ITEMS_TYPES.CHANNEL) {
        this.$router.push({ name: 'Channel', params: { channelId: this.item.id } });
      }
    },
  },
};
</script>
