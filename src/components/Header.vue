<template>
  <div class="l-constrained c-header">
    <div class="c-header__logo  c-header__logo--sml"
          :style="{ backgroundImage: `url('${logoSml}')` }" />
    <div class="c-header__logo  c-header__logo--lrg"
        :style="{ backgroundImage: `url('${logoLrg}')` }" />
    <SearchInput />
    <!-- search input  -->
  </div>
</template>

<script>
import logoLrg from '@/assets/images/logo-lrg.png';
import logoSml from '@/assets/images/logo-sml.png';
import SearchInput from './SearchInput.vue';

export default {
  name: 'Header',
  components: {
    SearchInput,
  },
  data() {
    return {
      logoLrg,
      logoSml,
    };
  },
};
</script>
