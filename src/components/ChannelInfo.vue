<template>
    <div class="c-channel-info">
        <div class="c-channel-info__branding">
            <picture class="c-channel-info__branding__banner">
                <source media="(min-width: 600px)" :srcset="channel.banner.other">
                <img :src="channel.banner.mobile" alt="IfItDoesntMatchAnyMedia">
            </picture>

            <picture class="c-channel-info__branding__image">
                <source media="(min-width: 600px)" :srcset="channel.thumbnail.other">
                <img :src="channel.thumbnail.mobile" alt="IfItDoesntMatchAnyMedia">
            </picture>
        </div>

        <div class="c-channel-info__text">
            <div class="c-channel-info__text__title__header">{{ channel.title }}</div>
            <div class="c-channel-info__text__title__sub">{{ channel.subscribersCount }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChannelInfo',
  props: {
    channel: {
      required: true,
      type: Object,
    },
  },
};
</script>
