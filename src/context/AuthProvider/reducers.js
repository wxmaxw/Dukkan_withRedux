import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  isAuthLoading: true,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      AsyncStorage.setItem("@USER", JSON.stringify(user))
      return { ...state, user };
    
    case "REMOVE_USER" :
      AsyncStorage.removeItem("@USER");
      return {...state, user: null};


    case "SET_AUTH_LOADING":
      const { isAuthLoading } = action.payload;
      return { ...state, isAuthLoading };
    
    default:
      return state;
  }
}
