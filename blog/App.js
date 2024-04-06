
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { BlogProvider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Index' component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => {
                return <TouchableOpacity>
                  <AntDesign name="plus" size={24} color="black" onPress={() => navigation.navigate("Create")} />
                </TouchableOpacity>
              }
            })}
          />
          <Stack.Screen name='Show' component={ShowScreen}/>
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

