import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./reducers";

const initialState = {
  user: null,
  isAuthLoading: true,
};

const store = createStore(reducers, initialState);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@USER").then(userSession => {
      if (userSession) {
        setUser(JSON.parse(userSession));
      }
      setAuthLoading(false);
    });
  }, []);

  useEffect(() => {
    store.dispatch({
      type: "SET_USER",
      payload: { user }
    });
    store.dispatch({
      type: "SET_AUTH_LOADING",
      payload: { isAuthLoading }
    });
  }, [user, isAuthLoading]);

  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
