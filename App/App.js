import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import ChartAccountFormContainer from './screens/ChartAccountForm/ChartAccountFormContainer';
import { ChartAccountProvider } from './context/provider';
import ChartAccountListContainer from './screens/ChartAccountList/ChartAccountListContainer';
import { ROUTE } from './utils/constants';
import colors from './styles/colors';

const roboto = require('../assets/fonts/Roboto-Regular.ttf');
const robotoBold = require('../assets/fonts/Roboto-Bold.ttf');
const rubik = require('../assets/fonts/Rubik-Regular.ttf');

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontFamily: 'roboto-bold',
    fontWeight: '700',
    fontSize: 22,
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadAsync({
          roboto,
          'roboto-bold': robotoBold,
          rubik,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ChartAccountProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ROUTE.LIST}
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name={ROUTE.LIST}
            component={ChartAccountListContainer}
            options={() => ({
              title: 'Plano de contas',
            })}
          />
          <Stack.Screen
            name={ROUTE.FORM}
            component={ChartAccountFormContainer}
            options={{
              title: 'Inserir Conta',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ChartAccountProvider>
  );
}
