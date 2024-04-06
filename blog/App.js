
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { BlogProvider } from './src/context/BlogContext';

export default function App() {

  const Stack = createNativeStackNavigator()



  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Index' component={IndexScreen} />
          <Stack.Screen name='Show' component={ShowScreen} />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

