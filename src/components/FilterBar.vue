<template>
  <div class="l-constrained  c-filter-bar">
    <div class="c-filter-bar__header">
      <div> {{ $t('COMPONENTS.FILTER_BAR.COUNT', { count }) }}</div>
      <div @click="toggleDesktopFiltersVisibility">
        <font-awesome-icon :icon="['fa', 'filter']" />
        {{ $t('COMPONENTS.FILTER_BAR.FILTER') }}
      </div>
    </div>

    <!-- mobileFilters -->
    <div class="c-filter-bar__mobile__filters">
      <select name="type" id="ddl-type" class="c-filter-bar__mobile__filter"
          @change="setDDLValue($event, 'TYPE')">
        <option value="">All</option>
        <option v-for="opt in filters['TYPE'].options" :key="opt.title" :value="opt.value">
          {{opt.title}}
        </option>
      </select>
      <select name="type" id="ddl-time"  class="c-filter-bar__mobile__filter"
          @change="setDDLValue($event, 'DATE')">
        <option value="">Any time</option>
        <option v-for="opt in filters['DATE'].options" :key="opt.title" :value="opt.value">
          {{opt.title}}
        </option>
      </select>
    </div>

    <!-- desktop Filters -->
    <div v-if="desktopFiltersVisible" class="c-filter-bar__dt_filters">
      <div v-for="(filter, filterKey) in filters" :key="filter.title"
          class="c-filter-bar__dt_filter">
        <div>{{filter.title}}</div>
        <div v-for="opt in filter.options" :key="opt.title"
            class="c-filter-bar__dt_filter__option"
            :class="{ 'c-filter-bar__dt_filter__option--selected':
            opt.value === filter.selectedValue }">
          <span @click="setValue(filterKey, opt.value)" >{{opt.title}}</span>

          <font-awesome-icon icon="times"
                v-if="!filter.required && opt.value === filter.selectedValue"
                @click="setValue(filterKey, null)"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getFilters, getFiltersRequestObject } from '@/services/filter.service';

export default {
  name: 'FilterBar',
  components: { },
  data() {
    return {
      filters: getFilters(),
      desktopFiltersVisible: false,
    };
  },
  props: {
    count: {
      required: true,
      type: Number,
    },
  },
  methods: {
    setValue(filterKey, value) {
      this.filters[filterKey].selectedValue = value;
      this.$emit('update', getFiltersRequestObject(this.filters));
    },
    setDDLValue(event, filterKey) {
      const newVal = event.target.value;
      this.filters[filterKey].selectedValue = newVal === '' ? null : newVal;
      this.$emit('update', getFiltersRequestObject(this.filters));
    },
    toggleDesktopFiltersVisibility() {
      this.desktopFiltersVisible = !this.desktopFiltersVisible;
    },
  },
};
</script>
