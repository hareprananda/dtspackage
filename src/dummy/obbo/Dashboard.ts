import { DummyObject } from 'models/index';

export namespace DashboardDummy {
  export const bonus: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: '/v2/reseller/dashboard/bonuses',
  };

  export const channel: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Data',
      },
      {
        code: 400,
        description: 'No service type',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: '/v2/reseller/dashboard/channels',
  };

  export const informations: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
    url: '/v2/reseller/dashboard/informations',
  };
}
