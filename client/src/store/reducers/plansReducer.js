import {
  Export_Plan,
  Geting_Plans,
  Select_Plans_Current,
  UPDATE_DATA,
} from "../types/plansTypes";

const initialValues = {
  plans: [],
  selectedPlans: null,
  total: 0,
  userData: {
    email: "",
    phone: "",
    selectedPlans: null,
  },
};

export const plansReducer = (state = initialValues, action) => {
  switch (action.type) {
    case Geting_Plans:
      const payload = action.payload;
      return {
        ...state,
        plans: payload.plans,
      };
    case UPDATE_DATA:
      return { ...state, userData: action.payload };
    case Export_Plan:
      localStorage.setItem(
        "usersInfo",
        JSON.stringify({ ...state.userData, selectedPlans: action.payload })
      );
      return {
        ...state,
        userData: {
          ...state.userData,
          selectedPlans: action.payload,
        },
      };
    case Select_Plans_Current:
      return {
        ...state,
        selectedPlans: action.payload.selectedPlans,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
