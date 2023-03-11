import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed'
import ChartAccountList from './views/ChartAccountList';
import ChartAccountForm from './views/ChartAccountForm';
import { ChartAccountProvider } from './context/chartAccountContext';
import { loadAsync } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadAsync({
          'roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf'),
          'rubik': require('./../assets/fonts/Rubik-Regular.ttf'),
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
    return null
  }

  return (
    <ChartAccountProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='ChartAccountList'
          screenOptions={screenOptions}
          >
          <Stack.Screen
            name="ChartAccountList"
            component={ChartAccountList}
            options={({ navigation }) => {
              return {
                title: 'Plano de contas',
                headerRight: () => (
                  <Button
                    type='clear'
                    onPress={() => navigation.navigate('ChartAccountForm')}
                  >
                    <Icon name="add" size={26} color={'white'} />
                  </Button>
                ),
              }
            }} />
          <Stack.Screen
            name="ChartAccountForm"
            component={ChartAccountForm}
            options={{
                title: 'Inserir Conta',
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ChartAccountProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#622490',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: 'roboto-bold',
    fontWeight: '700',
    fontSize: 22
  },
}

registerRootComponent(App);