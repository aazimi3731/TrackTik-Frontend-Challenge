import { http } from '@/services/http';
import { IClient, IRestResponse } from '@/types';

export default {
  getAll: async (): Promise<IRestResponse> => {
    try {
      const res = await http.get('/clients');

      return {
        success: true,
        status: res.status,
        statusText: res.statusText,
        data: res.data as IClient[],
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
