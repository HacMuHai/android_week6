import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/Screen1'
import Screen2 from './src/Screen2'
import Screen3 from './src/Screen3'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Screen1' component={Screen1}/>
        <Stack.Screen name='Screen2' component={Screen2}/>
        <Stack.Screen name='Screen3' component={Screen3}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
