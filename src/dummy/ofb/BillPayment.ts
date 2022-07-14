import { DummyObject } from 'models/index';

export namespace BillPaymentDummy {
  export const createAccess: DummyObject = {
    url: '/v1/oauth2-client/settings/billpayment/create',
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
        exampleOption: ['Unauthorized'],
      },
    ],
  };

  export const list: DummyObject = {
    url: '/v1/billpayment',
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

  export const setting: DummyObject = {
    url: '/v1/billpayment/settings',
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
    url: '/v1/billpayment/settings/callback',
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

  export const exportBillPayment: DummyObject = {
    url: '/v1/billpayment/export',
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
        exampleOption: ['Unauthorized'],
      },
    ],
  };

  export const notifyLogs: DummyObject = {
    url: '/v1/billpayment/:id/notify-logs',
    method: 'GET',
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
        code: 400,
        exampleOption: ['Unauthorized'],
      },
    ],
  };
}
