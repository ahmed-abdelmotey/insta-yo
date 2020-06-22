<template>
    <div class="c-video-embed"  style="">
        <iframe :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"  class="c-video-embed__iframe"></iframe>
    </div>
</template>

<script>
export default {
  name: 'VideoEmbed',
  props: {
    videoId: {
      required: true,
      type: String,
    },
  },
};
</script>
