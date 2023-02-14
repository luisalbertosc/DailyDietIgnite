import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Complete } from '@screens/Complete';
import { FoodPage } from '@screens/FoodPage';
import { FoodUpdate } from '@screens/FoodUpdate';
import { Home } from '@screens/Home';
import { NewFood } from '@screens/NewFood';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="statistics"
        component={Statistics}
      />

      <Screen
        name="new"
        component={NewFood}
      />

      <Screen
        name="complete"
        component={Complete}
      />

      <Screen
        name="foodPage"
        component={FoodPage}
      />

      <Screen
        name="foodUpdate"
        component={FoodUpdate}
      />
      
    </Navigator>
  );
}