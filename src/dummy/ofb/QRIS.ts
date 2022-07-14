import { DummyObject } from 'models/index';

export namespace QRISDummy {
  export const createAccess: DummyObject = {
    url: '/v1/oauth2-client/settings/qris/create',
    method: 'POST',
    headers: [
      {
        code: 200,
      },
      {
        code: 400,
      },
      {
        code: 401,
      },
    ],
  };

  export const list: DummyObject = {
    url: '/v1/qris/acquire/transactions',
    method: 'GET',
    headers: [
      {
        code: 200,
      },
      {
        code: 204,
      },
      {
        code: 401,
      },
    ],
  };

  export const notifyLogs: DummyObject = {
    url: '/v1/qris/acquire/log/:id',
    method: 'GET',
    headers: [
      {
        code: 200,
      },
      {
        code: 400,
      },
      {
        code: 401,
      },
    ],
  };

  export const exportQris: DummyObject = {
    url: '/v1/qris/acquire/transactions/export',
    method: 'POST',
    headers: [
      {
        code: 200,
      },
      {
        code: 400,
      },
      {
        code: 401,
      },
    ],
  };

  export const setting: DummyObject = {
    url: '/v1/qris/acquire/settings',
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
  };

  export const updateNotifySetting: DummyObject = {
    url: '/v1/qris/acquire/settings/callback',
    method: 'POST',
    headers: [
      {
        code: 200,
        exampleOption: ['Example'],
      },
      {
        code: 400,
        exampleOption: ['Example'],
      },
      {
        code: 401,
        exampleOption: ['Unauthorize'],
      },
    ],
  };

  export const updateSettlementFee: DummyObject = {
    url: '/v1/qris/acquire/settings/settlement',
    method: 'POST',
    headers: [
      {
        code: 200,
        exampleOption: ['Example'],
      },
      {
        code: 400,
        exampleOption: ['Example'],
      },
      {
        code: 401,
        exampleOption: ['Unauthorize'],
      },
    ],
  };
}
