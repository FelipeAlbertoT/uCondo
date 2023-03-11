import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import ChartAccountList from './views/ChartAccountList';
import ChartAccountForm from './views/ChartAccountForm';
import { ChartAccountProvider } from './context/chartAccountContext';

const roboto = require('../assets/fonts/Roboto-Regular.ttf');
const robotoBold = require('../assets/fonts/Roboto-Bold.ttf');
const rubik = require('../assets/fonts/Rubik-Regular.ttf');

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#622490',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: 'roboto-bold',
    fontWeight: '700',
    fontSize: 22,
  },
};

function AddButton({ navigate }) {
  return (
    <Button type="clear" onPress={() => navigate('ChartAccountForm')}>
      <Icon name="add" size={26} color="white" />
    </Button>
  );
}

function App() {
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
          initialRouteName="ChartAccountList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="ChartAccountList"
            component={ChartAccountList}
            options={({ navigation }) => ({
              title: 'Plano de contas',
              headerRight: () => AddButton(navigation),
            })}
          />
          <Stack.Screen
            name="ChartAccountForm"
            component={ChartAccountForm}
            options={{
              title: 'Inserir Conta',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ChartAccountProvider>
  );
}

registerRootComponent(App);
