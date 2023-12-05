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

export const testCredentials: CredentialsType = {
  accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_REGION,
  bucket: import.meta.env.VITE_BUCKET,
};

export const initialInputValues: CredentialsType = import.meta.env.DEV
  ? testCredentials
  : {
      accessKeyId: '',
      secretAccessKey: '',
      region: '',
      bucket: '',
    };
