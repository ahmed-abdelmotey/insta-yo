<template>
<div class="c-video-panel">

    <div class="c-video-panel__video">
        <div class="c-video-panel__video__info">
            <div class="c-video-panel__video__info__title"> {{ video.title }}</div>
            <div class="c-video-panel__video__info__subtitle">
                {{video.views}} {{$t('COMPONENTS.ITEM.VIEWS')}}
            </div>
        </div>

        <div class="c-video-panel__video__actions">
            <span><font-awesome-icon :icon="['fa', 'thumbs-up']" />
                {{ video.likes > 1000 ? `${ Math.round(video.likes / 1000) } K` : video.likes }}
            </span>
            <span><font-awesome-icon :icon="['fa', 'thumbs-down']" />
                {{
                    video.dislikes > 1000 ?
                    `${ Math.round(video.dislikes / 1000)} K` :
                    video.dislikes
                }}
            </span>
            <span><font-awesome-icon :icon="['fa', 'share']" /> share</span>
            <span><font-awesome-icon :icon="['fa', 'plus']" /></span>
            <span><font-awesome-icon :icon="['fa', 'ellipsis-h']" /></span>
        </div>
    </div>

    <div class="c-video-panel__channel">
        <div class="c-video-panel__channel__icon">
            <span>{{video.channelName.substr(0,1)}}</span>
        </div>
        <div class="c-video-panel__channel__info">
            <span>{{video.channelName}}</span>
            <span class="c-video-panel__channel__info__sub">{{video.publishDateRelative}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'VideoPanel',
  props: {
    video: {
      required: true,
      type: Object,
    },
  },
};
</script>
