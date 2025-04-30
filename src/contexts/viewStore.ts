import { create } from "zustand";

interface ViewState {
  showView: boolean;
  setShowView: (value: boolean) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  showView: false, // Initial state
  setShowView: (value: boolean) => set({ showView: value }), // Update state
}));
 