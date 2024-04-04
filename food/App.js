import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurentScreen from './src/screens/RestaurentScreen';



const App = () => {
  const stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Search' component={SearchScreen}/>  
        <stack.Screen name='Restaurent' component={RestaurentScreen}/>  
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

