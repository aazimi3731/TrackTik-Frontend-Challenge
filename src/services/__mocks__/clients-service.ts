import { IClient } from '@/types';
import { IRestResponse } from '@/types/interfaces/IRestResponse';

export const clients: Array<IClient> = [{
    id: "gVGwZnyuKwqu",
    givenName: "Pouros - Hansen",
    logo: "http://lorempixel.com/640/480/business",
    createdAt: "Mon Jan 20 2020 06:42:15 GMT+0000 (UTC)",
    updatedAt: "Sat Dec 05 2020 14:10:06 GMT+0000 (UTC)",
    tags: [
      "Group",
      "Infrastructure"
    ]
  },
  {
    id: "69NXb2WEaPR6",
    givenName: "Cassin Group",
    logo: "http://lorempixel.com/640/480/business",
    createdAt: "Sun Apr 19 2020 21:51:39 GMT+0000 (UTC)",
    updatedAt: "Sun Dec 06 2020 00:17:17 GMT+0000 (UTC)",
    tags: [
      "Metrics",
      "Creative"
    ]
  },
  {
    id: "z-U_T4B6opoS",
    givenName: "Collins - Hansen",
    logo: "http://lorempixel.com/640/480/business",
    createdAt: "Mon Jun 15 2020 09:50:34 GMT+0000 (UTC)",
    updatedAt: "Sat Dec 05 2020 18:16:27 GMT+0000 (UTC)",
    tags: [
      "Integration"
    ]
}];

export const client: IClient = clients[0];

export default {
  getAll: jest.fn(async (): Promise<IRestResponse> => ({
    success: true,
    status: 200,
    statusText: 'OK',
    data: clients,
  })),
};
