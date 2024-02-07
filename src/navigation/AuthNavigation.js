import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.AUTH_NAVIGATION.SIGNUP}>
      <Stack.Screen name={ROUTES.AUTH_NAVIGATION.SIGNUP} component={Signup} />
      <Stack.Screen name={ROUTES.AUTH_NAVIGATION.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
