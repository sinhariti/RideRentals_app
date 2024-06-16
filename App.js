// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './HomePage';
import ProfilePage from './ProfilePage';
import ReservationPage from './ReservationPage';
import PenaltyPage from './PenaltyPage';
import CustomNavbar from './CustomNavbar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <CustomNavbar navigation={navigation} />,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Reservation" component={ReservationPage} />
        <Stack.Screen name="Penalty" component={PenaltyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
