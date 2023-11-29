import { CredentialsType } from '@/types';

type Action =
  | {
      type: 'setAccessKeyId';
      payload: string;
    }
  | {
      type: 'setSecretAccessKey';
      payload: string;
    }
  | {
      type: 'setRegion';
      payload: string;
    }
  | {
      type: 'setBucket';
      payload: string;
    };

export const inputValuesReducer = (state: CredentialsType, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'setAccessKeyId':
      return { ...state, accessKeyId: payload };
    case 'setSecretAccessKey':
      return { ...state, secretAccessKey: payload };
    case 'setRegion':
      return { ...state, region: payload };
    case 'setBucket':
      return { ...state, bucket: payload };
  }
};

export const initialInputValues: CredentialsType = {
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
  bucket: '',
};
