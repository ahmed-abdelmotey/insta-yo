import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import SearchInput from '@/components/SearchInput.vue';

describe('Header.vue', () => {
  it('renders without errors', () => {
    const wrapper = shallowMount(Header, {
      propsData: {
        logoSml: 'logoSml',
        logoLrg: 'logoLrg',
      },
    });

    expect(wrapper.findComponent(SearchInput)).toBeTruthy()
  });
});
