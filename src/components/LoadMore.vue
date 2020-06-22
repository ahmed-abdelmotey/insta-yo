<template>
    <div class="c-load-more">
        <button class="h-mobile-only" @click="loadMore">
            {{$t('COMPONENTS.LOAD_MORE.LABEL')}}
        </button>
        <ScrollObserver class="h-desktop-only " @end="loadMore"/>
    </div>
</template>

<script>
import ScrollObserver from '@/components/ScrollObserver.vue';

export default {

  name: 'LoadMore',
  components: {
    ScrollObserver,
  },
  methods: {
    loadMore() {
      this.$emit('load');
    },
  },
};
</script>
