import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import Search from './views/Search';
import SearchResult from './views/SearchResult';
const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
}