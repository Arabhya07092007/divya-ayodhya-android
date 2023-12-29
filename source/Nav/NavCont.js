import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';

export default function NavCont() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}