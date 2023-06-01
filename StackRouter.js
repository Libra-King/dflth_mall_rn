import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './views/Start';
import Cart from './views/Cart';
import Home from './views/Home';
import Login from './views/Login';
import Search from './views/Search';
import SearchResult from './views/SearchResult';
import WebviewContainer from './views/WebviewContainer';
const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{headerShown: false}}
      />
      <Stack.Screen name="WebviewContainer" component={WebviewContainer} />
    </Stack.Navigator>
  );
}
