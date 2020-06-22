<template>
    <div class="search">
        <input
            @keyup.enter="search"
            type="text"
            name="search"
            id="search-input"
            class="search__input"
            placeholder="Search"
            v-model="searchValue">
        <button class="search__button" @click="search">
            <font-awesome-icon :icon="['fa', 'search']" />
        </button>
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    search() {
      if (this.$route.name !== 'Home' || !this.$route.query.query || this.$route.query.query !== this.searchValue) {
        this.$router.push({ name: 'Home', query: { query: this.searchValue } });
      }
    },
  },
};
</script>
