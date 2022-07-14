import { DummyObject } from 'models/index';

export namespace KYCDummy {
  export const check: DummyObject = {
    url: '/v1/user/business-kyc/check',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
      {
        code: 204,
        description: 'No Content',
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
  };

  export const optionList: DummyObject = {
    url: '/v1/user/business-kyc/list',
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
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
  };

  export const details: DummyObject = {
    url: '/v1/user/business-kyc/details',
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
      },
      {
        code: 400,
        description: 'No Content',
      },
      {
        code: 401,
        description: 'Unauthorized',
        exampleOption: ['Unauthorized'],
      },
    ],
  };

  export const upload: DummyObject = {
    url: '/v1/user/business-kyc/upload',
    method: 'POST',
    headers: [
      {
        code: 200,
        description: 'Success',
        exampleOption: ['Example'],
      },
    ],
  };
}
