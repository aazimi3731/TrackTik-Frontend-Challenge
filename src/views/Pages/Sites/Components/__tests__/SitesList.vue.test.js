import { createLocalVue, mount } from '@/test/testSetup';
import createTestStore from '@/store/store-test-config';
import { sites, site } from '@/services/__mocks__/sites-service';
import Component from '../SitesList.vue';

const localVue = createLocalVue();

const siteInfo = {
  id: 'Bs4Y3Uncb8',
  title: 'Music Garage',
  image: 'http://lorempixel.com/640/480/city',
  completeAddress: '0465 Gutkowski Knoll, Evanhaven, New York 21876-4018, Denmark',
  address: 'New York 21876-4018, Denmark',
  tags: 'old, state',
  contact: 'Janet Schulist, Legacy Security Developer',
  contactName: 'Janet Schulist',
  contactJob: 'Legacy Security Developer',
  contactPhone: '093-420-4070',
  contactEmail: 'Sydney_Wolf22@gmail.com',
  contactAddress: '934 Brooks Path, Anastaciobury, North Carolina 19483-0185, Thailand',
};

describe(Component, () => {
  let wrapper;
  const store = createTestStore({
    modules: {
      siteModule: {
        state: {
          site,
          sites,
        },
      },
    },
  });

  beforeEach(async () => {
    wrapper = await mount(Component, {
      localVue,
      store,
      props: {
        sites,
      },
    });
  });

  describe('Data exist correctly', () => {
    test('Sites data exist', async () => {
      await wrapper.setProps({ sites });
      expect(wrapper.props().sites).toStrictEqual(sites);
    });
  });
  describe('Components are correctly displayed', () => {
    test('The first sitelist component is displayed correctly', () => {
      const element = wrapper.find('[data-test="siteItem-1"]');
      expect(element.exists()).toBeTruthy;
    });
    test('The last sitelist component is displayed correctly', () => {
      const length = sites.length;
      const element = wrapper.find(`[data-test="siteItem-${length}"]`);
      expect(element.exists()).toBeTruthy;
    });
  });
  describe('Method work correctly', () => {
    test('eventDetails works and put data into parameters correctly', async () => {
      jest.spyOn(wrapper.vm, 'siteInformation');

      const siteInfo = await wrapper.vm.siteInformation(site);

      expect(wrapper.vm.siteInformation).toBeCalledTimes(1);
      expect(siteInfo).toEqual(siteInfo);
    });
  });
});
