import { DummyObject } from 'models/index';

export namespace ClientDummy {
  export const list: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        exampleOption: ['Example'],
      },
      {
        code: 204,
        exampleOption: ['Example'],
      },
      {
        code: 400,
        exampleOption: ['Example'],
      },
      {
        code: 401,
        exampleOption: ['Unauthorized'],
      },
    ],
    url: '/v2/reseller/clients',
  };

  export const summary: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        exampleOption: ['Example'],
      },
      {
        code: 401,
        exampleOption: ['Unauthorized'],
      },
    ],
    url: '/v2/reseller/clients/summary',
  };

  export const detail: DummyObject = {
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['NewUser', 'InProgress', 'Approved'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    method: 'GET',
    url: '/v2/reseller/client/:id',
  };

  export const picList: DummyObject = {
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    method: 'GET',
    url: '/v2/reseller/client/:id/pic',
  };

  export const productList: DummyObject = {
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    method: 'GET',
    url: '/v2/reseller/client/:id/product',
  };

  export const updateProfile: DummyObject = {
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    method: 'PUT',
    url: '/v2/reseller/client/:id',
  };

  export const addPIC: DummyObject = {
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/pic`,
  };

  export const updatePIC: DummyObject = {
    method: 'PUT',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/pic`,
  };

  export const deletePIC: DummyObject = {
    method: 'DELETE',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/pic`,
  };

  export const addProduct: DummyObject = {
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/product`,
  };

  export const editProduct: DummyObject = {
    method: 'PUT',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/product`,
  };

  export const deleteProduct: DummyObject = {
    method: 'DELETE',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/product`,
  };

  export const milestone: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/milestones`,
  };

  export const generateCompliance: DummyObject = {
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/client/:id/compliance/:type/generate`,
  };

  export const uploadCompliance: DummyObject = {
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/client/:id/compliance/:type/upload`,
  };

  export const limitation: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/limitations`,
  };

  export const informations: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example', 'NoInactive', 'NoSuggestion', 'OnlyUsages'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/informations`,
  };

  export const updateReason: DummyObject = {
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/inactive`,
  };

  export const getCommission: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/commissions`,
  };

  export const feeHistory: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
        exampleOption: ['Example'],
      },
      {
        code: 400,
        description: 'Bad Request',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: `/v2/reseller/client/:id/fee-histories`,
  };
}
