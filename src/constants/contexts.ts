import { createContext } from "react";

export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => {},
});

