import { createContext, useReducer } from "react";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const initialState = {
    isCreate: false,
    isDelete: false,
    selectedArtst: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_CREATE":
        return { ...state, isCreate: !state.isCreate };
      case "TOGGLE_UPDATE":
        return {
          ...state,
          isUpdate: !state.isUpdate,
        };
      case "TOGGLE_DELETE":
        return {
          ...state,
          isDelete: !state.isDelete,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
