import { DummyObject } from 'models/index';

export namespace UserManagementDummy {
  export const scopes: DummyObject = {
    method: 'GET',
    headers: [
      {
        code: 200,
        exampleOption: ['Example', 'BillPaymentUnlocked', 'QrisAcqUnlocked'],
      },
    ],
    url: '/v1/user/scopes',
  };
}
