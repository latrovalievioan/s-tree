import { create } from "zustand";

type Store = {
  expandedDirs: Set<string>;
  toggleExpandedDir: (dir: string) => void;
  selectedDir: string;
  setSelectedDir: (dir: string) => void;
};

export const useStore = create<Store>()((set) => ({
  expandedDirs: new Set<string>([""]),
  toggleExpandedDir: (dir) =>
    set((state) => {
      const expandedDirs = new Set(state.expandedDirs);
      expandedDirs.has(dir) ? expandedDirs.delete(dir) : expandedDirs.add(dir);
      return { ...state, expandedDirs };
    }),
  selectedDir: "",
  setSelectedDir: (selectedDir) => set((state) => ({ ...state, selectedDir })),
}));
