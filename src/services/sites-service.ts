import { http } from '@/services/http';
import { ISite, IRestResponse } from '@/types';

export default {
  getById: async (id: string): Promise<IRestResponse> => {
    try {
      const url = `/sites/${id}`;
      const res = await http.get(url);

      return {
        success: true,
        status: res.status,
        statusText: res.statusText,
        data: res.data as ISite,
      };
    } catch (error) {
      return {
        success: false,
        status: error.response !== undefined ? error.response.status : '',
        statusText: error.message,
        data: null,
      };
    }
  },
  getAll: async (): Promise<IRestResponse> => {
    try {
      const params = {
        _page: 1,
        _limit: 20,
      };
      const res = await http.get('/sites', { params });

      return {
        success: true,
        status: res.status,
        statusText: res.statusText,
        data: res.data as ISite[],
      };
    } catch (error) {
      return {
        success: false,
        status: error.response !== undefined ? error.response.status : '',
        statusText: error.message,
        data: null,
      };
    }
  },
  getSearch: async (search: string): Promise<IRestResponse> => {
    try {
      const params = {
        _page: 1,
        _limit: 20,
        q: search,
      };
      const res = await http.get('/sites', { params });

      return {
        success: true,
        status: res.status,
        statusText: res.statusText,
        data: res.data as ISite[],
      };
    } catch (error) {
      return {
        success: false,
        status: error.response !== undefined ? error.response.status : '',
        statusText: error.message,
        data: null,
      };
    }
  },
  getFilter: async (filters: Array<Record<string, string>>): Promise<IRestResponse> => {
    try {
      const params = {
        ...filters,
        _page: 1,
        _limit: 20,
      };
      const res = await http.get('/sites', { params });

      return {
        success: true,
        status: res.status,
        statusText: res.statusText,
        data: res.data as ISite[],
      };
    } catch (error) {
      return {
        success: false,
        status: error.response !== undefined ? error.response.status : '',
        statusText: error.message,
        data: null,
      };
    }
  },
};
