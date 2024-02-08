import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreeen';
import SignupScreen from './screens/SignupScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import RequestScreen from './screens/RequestScreen';
import DonorScreen from './screens/DonorScreen';
import BloodRequestsScreen  from './screens/BloodRequestsScreen';
import BloodRequestsbyDistrictS from './screens/BloodRequestsbyDistrictSScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotpasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RequestS" component={RequestScreen} />
        <Stack.Screen name="DonorS" component={DonorScreen} />
        <Stack.Screen name="BloodRequestsS" component={BloodRequestsScreen} />   
        <Stack.Screen name="BloodRequestsbyDistrictS" component={BloodRequestsbyDistrictS} />   
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;