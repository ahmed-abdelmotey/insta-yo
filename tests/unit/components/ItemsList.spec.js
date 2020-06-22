import { shallowMount } from '@vue/test-utils';
import ItemsList from '@/components/ItemsList.vue';

describe('ItemsList.vue', () => {
  it('renders passed items', () => {
    const items = [{ id: 1 }];

    const wrapper = shallowMount(ItemsList, {
      propsData: { items },
    });

    expect(wrapper.get('[data-test="item"]')).toBeTruthy();
  });
});
