import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/Dashboard/Dashboard';
import Function from './src/Function';
import Details from './src/Details';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} options={{headerShown:false}}/>
        <Stack.Screen name = "Dashboard" component = {Dashboard} />
        <Stack.Screen name = "Function" component = {Function} />
        <Stack.Screen name = "Details" component = {Details} options={{title:"Service Page"}}/>
     </Stack.Navigator></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
