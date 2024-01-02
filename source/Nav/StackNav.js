import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import HeaderRight from '../Components/HeaderRight';
import HeaderTitle from '../Components/HeaderTItle';

import ParkingFeed from '../Parking/ParkingFeed';
import ReviewSm from '../Parking/ReviewSm';
import Ticket from '../Parking/Ticket';
import ModalTester from '../Parking/ModalTester';
import Emergency from '../screens/Emergency';

import Firestore from '../Payment/Firestore';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#FDFAE7' },
        headerShown: false,
        headerShadowVisible: true,
      }}>
      {/* <Stack.Screen name="Ayodhdya Darshan" component={HomeScreen} /> */}
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="ParkingFeed" component={ParkingFeed} />
      <Stack.Screen name="ModalTester" component={ModalTester} />
      <Stack.Screen name="ReviewSm" component={ReviewSm} />
      <Stack.Screen name="Ticket" component={Ticket} />
    </Stack.Navigator>
  );
}

export default StackNav;
