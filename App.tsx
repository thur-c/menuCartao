import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Screens/Main';
import { RootStackParamList } from './src/@types/RootStackParamList';
import Toast, { BaseToast, BaseToastProps, ErrorToast, InfoToast } from 'react-native-toast-message';
import { Camera } from 'expo-camera';
import {LoginContextProvider} from './src/context/loginContext';


export default function App() {
  const [isFontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });
  const [, setHasPermission] = useState<boolean | null>(null);
  const Stack = createStackNavigator<RootStackParamList>();
  useEffect(() => {
    const getBarCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCameraPermissions();
  }, []);

  function MyStack(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: true}} >
        <Stack.Screen  name='Home' component={Home}/>
        <Stack.Screen name='Main'component={Main}/>
      </Stack.Navigator>
    );
  }

  if (!isFontLoaded){
    return null;
  }

  const toastConfig  = {
    error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: 'red', backgroundColor: '#eee', width: '90%' }}
        contentContainerStyle={{ paddingLeft: 20, flexGrow: 1 }}
        text1Style={{
          fontSize: 20,
          fontWeight: '500'
        }}
        text2Style={{
          fontSize: 12,
          fontWeight: '400'
        }}
      />
    ),
    success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green', backgroundColor: '#eee', width: '90%' }}
        contentContainerStyle={{ paddingLeft: 20, flexGrow: 1 }}
        text1Style={{
          fontSize: 20,
          fontWeight: '500'
        }}
        text2Style={{
          fontSize: 16,
          fontWeight: '400'
        }}
      />
    ),
    info: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <InfoToast
        {...props}
        style={{ borderLeftColor: 'blue', backgroundColor: '#eee', width: '90%' }}
        contentContainerStyle={{ paddingLeft: 20, flexGrow: 1 }}
        text1Style={{
          fontSize: 20,
          fontWeight: '500'
        }}
        text2Style={{
          fontSize: 12,
          fontWeight: '400'
        }}
      />
    ),
  };


  return (
    <LoginContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={'#1c1917'}/>
        <MyStack />
        <Toast

          config={toastConfig}/>
      </NavigationContainer>
    </LoginContextProvider>

  );
}
