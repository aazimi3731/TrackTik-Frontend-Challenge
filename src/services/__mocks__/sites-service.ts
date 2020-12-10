import { ISite } from '@/types';
import { IRestResponse } from '@/types/interfaces/IRestResponse';

export const sites: Array<ISite> = [{
  id: "Bs4Y3Uncb8",
  clientId: "gVGwZnyuKwqu",
  title: "Music Garage",
  createdAt: "Sat Jun 20 2020 00:08:10 GMT+0000 (UTC)",
  updatedAt: "Sun Dec 06 2020 00:53:46 GMT+0000 (UTC)",
  contacts: {
    main: {
      id: "V4hBeyyCzj",
      firstName: "Janet",
      lastName: "Schulist",
      email: "Sydney_Wolf22@gmail.com",
      phoneNumber: "093-420-4070",
      jobTitle: "Legacy Security Developer",
      address: {
        zipCode: "19483-0185",
        city: "Anastaciobury",
        street: "934 Brooks Path",
        country: "Thailand",
        state: "North Carolina"
      }
    }
  },
  address: {
    zipCode: "21876-4018",
    city: "Evanhaven",
    street: "0465 Gutkowski Knoll",
    country: "Denmark",
    state: "New York"
  },
  images: [
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city"
  ],
  tags: [
    "old",
    "state"
  ]
},
{
  id: "jJiCQZQ_zE",
  clientId: "gVGwZnyuKwqu",
  title: "Movies House",
  createdAt: "Mon Apr 27 2020 22:27:48 GMT+0000 (UTC)",
  updatedAt: "Sat Dec 05 2020 19:23:31 GMT+0000 (UTC)",
  contacts: {
    main: {
      id: "hk94oZ024m",
      firstName: "Gloria",
      lastName: "Fahey",
      email: "Eleonore.OConnell62@yahoo.com",
      phoneNumber: "055.341.7497 x3010",
      jobTitle: "Corporate Security Manager",
      address: {
        zipCode: "13306-8251",
        city: "Javonchester",
        street: "115 Amya Orchard",
        country: "Gibraltar",
        state: "Alaska"
      }
    }
  },
  address: {
    zipCode: "19961-5033",
    city: "New Dina",
    street: "346 Bartholome Divide",
    country: "Singapore",
    state: "Maryland"
  },
  images: [
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city"
  ],
  tags: [
    "renovated",
    "company"
  ]
},
{
  id: "zu_O3ITjTI",
  clientId: "gVGwZnyuKwqu",
  title: "Beauty Tower",
  createdAt: "Tue Apr 14 2020 07:16:50 GMT+0000 (UTC)",
  updatedAt: "Sat Dec 05 2020 22:31:59 GMT+0000 (UTC)",
  contacts: {
    main: {
      id: "sgqwTHR9iy",
      firstName: "Hayden",
      lastName: "Wilkinson",
      email: "Bernie68@yahoo.com",
      phoneNumber: "(086) 066-3022 x549",
      jobTitle: "Dynamic Intranet Specialist",
      address: {
        zipCode: "61760",
        city: "South Ron",
        street: "94679 Rolfson Flats",
        country: "Germany",
        state: "Kentucky"
      }
    }
  },
  address: {
    zipCode: "17041",
    city: "Reaganburgh",
    street: "698 Bauch Trail",
    country: "Pitcairn Islands",
    state: "North Dakota"
  },
  images: [
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city"
  ],
  tags: [
    "new",
    "company"
  ]
}];

export const site: ISite = sites[0];

export default {
  getAll: jest.fn(async (): Promise<IRestResponse> => ({
    success: true,
    status: 200,
    statusText: 'OK',
    data: sites,
  })),
  getById: jest.fn(async (): Promise<IRestResponse> => ({
    success: true,
    status: 200,
    statusText: 'OK',
    data: site,
  })),
  getSearch: jest.fn(async (): Promise<IRestResponse> => ({
    success: true,
    status: 200,
    statusText: 'OK',
    data: sites,
  })),
  getFilter: jest.fn(async (): Promise<IRestResponse> => ({
    success: true,
    status: 200,
    statusText: 'OK',
    data: sites,
  })),
};
