import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from '@rneui/themed'
import ChartAccountScreen from './views/ChartAccount';
import AddChartAccountScreen from './views/AddChartAccount';

const Stack = createNativeStackNavigator();

function App() {
  return (
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
          options={({ navigation }) => {
            return {
              title: 'Inserir Conta',
              headerRight: () => (
                <Button
                  type='clear'
                  onPress={() => navigation.navigate('Home')}
                >
                  <Icon name="check" size={26} color={'white'} />
                </Button>
              ),
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#622490',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 22
  }
}

registerRootComponent(App);