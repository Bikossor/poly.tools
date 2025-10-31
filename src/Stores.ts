import { create } from "zustand";

type MenuDrawerStore = {
  readonly isOpen: boolean;
  readonly close: () => void;
  readonly open: () => void;
};

export const useMenuDrawerStore = create<MenuDrawerStore>(set => ({
  isOpen: false,
  close: () => set(() => ({ isOpen: false })),
  open: () => set(() => ({ isOpen: true })),
}));
