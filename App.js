import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import Products from './src/pages/Products/Product';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login';
import AuthProvider from "./src/context/AuthProvider";
import Loading from './src/components/Loading';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const userSession = useSelector(state => state.user);
  const isAuthLoading = useSelector(state => state.isAuthLoading);

  if (isAuthLoading) {
    return <Loading />; // Yükleme durumunda Loading bileşenini göster
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name='LoginPage'
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name='ProductPage'
              component={Products}
              options={{
                title: "Dükkan",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: 'white' },
                headerTitleAlign: "center",
                headerRight: () => 
                  <Icon 
                    name ="logout" 
                    size = {28} 
                    color = "white" 
                    onPress = {() => dispatch({type: "REMOVE_USER"})}/>,
              }}
            />
            <Stack.Screen
              name='DetailPage'
              component={Detail}
              options={{
                title: "Detail",
                headerStyle: { backgroundColor: "#B175E8" },
                headerTitleStyle: { color: 'white' },
                headerTitleAlign: "center",
                headerTintColor: "white",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
