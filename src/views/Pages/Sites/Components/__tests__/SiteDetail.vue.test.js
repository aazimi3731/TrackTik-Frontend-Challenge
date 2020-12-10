import { createLocalVue, mount } from '@/test/testSetup';
import flushPromises from 'flush-promises';
import Component from '../SiteDetail.vue';

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

  beforeEach(async () => {
    wrapper = await mount(Component, {
      localVue,
      props: {
        siteInfo,
      },
    });
});

  describe('Data', () => {
    test('SiteInfo data exist', async () => {
      await wrapper.setProps({ siteInfo });
      expect(wrapper.props().siteInfo).toStrictEqual(siteInfo);
    });
  });
  describe('information', () => {
    test('Contact name is displayed correctly', async () => {
      await wrapper.setProps({ siteInfo });
      const element = wrapper.find('[data-test="site-detail-name"]');
      expect(element.text()).toBe(siteInfo.contactName);
    });
    test('Contact job title is displayed correctly', async () => {
      await wrapper.setProps({ siteInfo });
      const element = wrapper.find('[data-test="site-detail-job"]');
      expect(element.text()).toBe(siteInfo.contactJob);
    });
    test('Contact phone number is displayed correctly', async () => {
      await wrapper.setProps({ siteInfo });
      const element = wrapper.find('[data-test="site-detail-phone"]');
      expect(element.text()).toBe(siteInfo.contactPhone);
    });
    test('Contact email address title is displayed correctly', async () => {
      await wrapper.setProps({ siteInfo });
      const element = wrapper.find('[data-test="site-detail-email"]');
      expect(element.text()).toBe(siteInfo.contactEmail);
    });
    test('Contact address title is displayed correctly', async () => {
      await wrapper.setProps({ siteInfo });
      const element = wrapper.find('[data-test="site-detail-address"]');
      expect(element.text()).toBe(siteInfo.contactAddress);
    });
  });
  describe('image and icons', () => {
    test('The image is displayed correctly', () => {
      const element = wrapper.find('[data-test="site-detail-image"]');
      expect(element.exists()).toBeTruthy;
    });
    test('The personal icon is displayed correctly', () => {
      const element = wrapper.find('[data-test="site-detail-personalIcon"]');
      expect(element.exists()).toBeTruthy;
    });
    test('The phone icon is displayed correctly', () => {
      const element = wrapper.find('[data-test="site-detail-phoneIcon"]');
      expect(element.exists()).toBeTruthy;
    });
    test('The email icon is displayed correctly', () => {
      const element = wrapper.find('[data-test="site-detail-emailIcon"]');
      expect(element.exists()).toBeTruthy;
    });
    test('The address icon is displayed correctly', () => {
      const element = wrapper.find('[data-test="site-detail-addressIcon"]');
      expect(element.exists()).toBeTruthy;
    });
  });
});
