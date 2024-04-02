import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Screens/Main';
import { RootStackParamList } from './src/@types/RootStackParamList';
import Toast, { BaseToast, BaseToastProps, ErrorToast, InfoToast } from 'react-native-toast-message';
import Graph from './src/components/ModalGraph';
import ModalProblemas from './src/components/ModalProblemas';


export default function App() {
  const [isFontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  const Stack = createStackNavigator<RootStackParamList>();

  function MyStack(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: true}} >
        <Stack.Screen name='Main'component={Main}/>
        <Stack.Screen  name='Home' component={Home}/>
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
          fontSize: 12,
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
    <NavigationContainer >
      <StatusBar backgroundColor={'#1c1917'}/>
      <MyStack />
      <Toast

        config={toastConfig}/>
    </NavigationContainer>
  );
}
