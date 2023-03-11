import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed'
import ChartAccountScreen from './views/ChartAccount';
import AddChartAccountScreen from './views/AddChartAccount';
import { ChartAccountProvider } from './context/chartAccountContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ChartAccountProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={ChartAccountScreen}
            options={({ navigation }) => {
              return {
                title: 'Plano de contas',
                headerRight: () => (
                  <Button
                    type='clear'
                    onPress={() => navigation.navigate('Details')}
                  >
                    <Icon name="add" size={26} color={'white'} />
                  </Button>
                ),
              }
            }} />
          <Stack.Screen
            name="Details"
            component={AddChartAccountScreen}
            options={() => { return { title: 'Inserir Conta'}} } />
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
    fontFamily: 'roboto',
    fontWeight: '700',
    fontSize: 22
  }
}

registerRootComponent(App);