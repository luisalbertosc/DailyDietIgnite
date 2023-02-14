import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {

  // Prevenindo Glitch na navegação - avoid Glitch on nav
  const { COLORS } = useTheme(); 

  return (
    <View style={{flex: 1, backgroundColor: COLORS.GRAY_7}}>
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
    </View>
  );
}