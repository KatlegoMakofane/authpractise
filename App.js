import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from './src/Screens/index';
import recorder from './src/Screens/recoder';

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" options={{ headerShown:false }}

   component={index} />
        <Stack.Screen name="Recoder" component={recorder} />
      </Stack.Navigator>
    </NavigationContainer>
  
 
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
