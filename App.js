import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import createUser from './screens/createUser';
import feedBooks from './screens/feedBooks';
import detailBook from './screens/detailBook';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "LOGIN" }}
        />

        <Stack.Screen
          name="createUser"
          component={createUser}
          options={{ title: "CADASTRO" }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )

}