import { S3Client } from '@aws-sdk/client-s3';
import { create } from 'zustand';

type AppStore = {
  expandedDirs: Set<string>;
  toggleExpandedDir: (dir: string) => void;
  selectedObject: string;
  setSelectedObject: (key: string) => void;
  selectedObjectForAction: string;
  setSelectedObjectForAction: (key: string) => void;
};

export const useAppStore = create<AppStore>()((set) => ({
  expandedDirs: new Set<string>(['']),
  toggleExpandedDir: (dir) =>
    set((state) => {
      const expandedDirs = new Set(state.expandedDirs);
      expandedDirs.has(dir) ? expandedDirs.delete(dir) : expandedDirs.add(dir);
      return { ...state, expandedDirs };
    }),
  selectedObject: '',
  setSelectedObject: (selectedObject) =>
    set((state) => ({ ...state, selectedObject })),
  selectedObjectForAction: '',
  setSelectedObjectForAction: (selectedObjectForAction) =>
    set((state) => ({ ...state, selectedObjectForAction })),
}));

type ClientStore = {
  client?: S3Client;
  setClient: (client: S3Client) => void;
  bucket: string;
  setBucket: (bucket: string) => void;
};

export const useClientStore = create<ClientStore>()((set) => ({
  client: undefined,
  setClient: (client) => set((state) => ({ ...state, client })),
  bucket: '',
  setBucket: (bucket) => set((state) => ({ ...state, bucket })),
}));
