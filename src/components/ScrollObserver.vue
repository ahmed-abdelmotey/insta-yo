<template>
    <div class="scroll-observer"></div>
</template>

<script>
export default {
  name: 'ScrollObserver',
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('end');
      }
    });

    this.observer.observe(this.$el);
  },
};
</script>
