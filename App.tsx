import 'react-native-gesture-handler';
import React from 'react'
import TabCounter from './screens/TabCounter'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CounterScreen } from './screens/CounterScreen';
import { Text, View } from 'react-native';
import { Nav } from './components/Nav';
import { PaquetesScreen } from './screens/PaquetesScreen';
import { SendScreen } from './screens/SendScreen';
import { AppProps } from './screens/AppParamList';




const SimpleScreen = ({navigation,route}:AppProps<'SimpleScreen'>) => {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Pantalla Simple</Text>
      <Nav navigation={navigation}/>
      
    </View>
  ) 
}

const Stack = createStackNavigator();
  
const App = () => {

  return (
  
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="PaquetesScreen" component={PaquetesScreen} />
        <Stack.Screen name="SendScreen" component={SendScreen} />
        <Stack.Screen name="TabCounter" component={TabCounter} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="SimpleScreen" component={SimpleScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  )

}



export default App;