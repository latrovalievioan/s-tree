import { create } from 'zustand';

type Store = {
  expandedDirs: Set<string>;
  toggleExpandedDir: (dir: string) => void;
  selectedObject: string;
  setSelectedObject: (key: string) => void;
  selectedObjectForAction: string;
  setSelectedObjectForAction: (key: string) => void;
};

export const useStore = create<Store>()((set) => ({
  expandedDirs: new Set<string>(['']),
  toggleExpandedDir: (dir) =>
    set((state) => {
      const expandedDirs = new Set(state.expandedDirs);
      expandedDirs.has(dir) ? expandedDirs.delete(dir) : expandedDirs.add(dir);
      return { ...state, expandedDirs };
    }),
  selectedObject: '',
  setSelectedObject: (key) => set((state) => ({ ...state, key })),
  selectedObjectForAction: '',
  setSelectedObjectForAction: (key) => set((state) => ({ ...state, key })),
}));
