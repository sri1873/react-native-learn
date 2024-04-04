
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen1 from './src/screens/ColorScreen1';
import ColorScreen2 from './src/screens/ColorScreen2';
import ColorScreenReducer from './src/screens/ColorScreenReducer';
import InputScreen from './src/screens/InputScreen';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        <Stack.Screen name='Image' component={ImageScreen}/>
        <Stack.Screen name='Color' component={ColorScreen1}/>
        <Stack.Screen name='Color2' component={ColorScreen2}/>
        <Stack.Screen name='Color3' component={ColorScreenReducer}/>
        <Stack.Screen name='Input' component={InputScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;