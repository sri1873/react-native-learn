import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TracksListScreen from './src/screens/TracksListScreen';
export default function App() {

  const Stack = createNativeStackNavigator()

  const Tab = createBottomTabNavigator();

  const TrackNav = () => {

    return <Stack.Navigator >
      <Stack.Screen name='TrackList' component={TracksListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </Stack.Navigator>

  }

  return (
    
      <AuthProvider>
        <NavigationContainer>
          {false ?
            <Stack.Navigator>
              <Stack.Screen name='SignUp' component={SignUpScreen}
                options={() => { return { headerShown: false } }}
              />
              <Stack.Screen name='SignIn' component={SignInScreen}
                options={() => { return { headerShown: false } }} />
            </Stack.Navigator> :
            <Tab.Navigator>
              <Tab.Screen name="Track" component={TrackNav}
                options={() => { return { headerShown: false } }} />
              <Tab.Screen name="TrackCreate" component={TrackCreateScreen}
                options={() => { return { headerShown: false } }} />
              <Tab.Screen name="Account" component={AccountScreen}
                options={() => { return { headerShown: false } }} />
            </Tab.Navigator>}
        </NavigationContainer>
      </AuthProvider>
    
  );
}

