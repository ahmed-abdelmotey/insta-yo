<template>
  <div class="l-constrained  c-items-list">
      <Item v-for="item in items" :key="item.id"  :item="item"/>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ItemsList',
  components: {
    Item,
  },
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  mounted() {
    console.log(this.items);
  },
};
</script>
