import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ToDo from './screens/ToDo';
import ManageAccount from './screens/ManageAccount';
import ResetPassword from './screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{ headerShown: false }} />
          <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


