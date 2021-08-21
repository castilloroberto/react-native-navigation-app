import React from 'react'
import { Button, View ,StyleSheet} from 'react-native'

export const Nav = ({navigation}) => {
    return (
        <View style={styles.nav}>
        <Button
          title="TabCounter"
          onPress={()=> navigation.navigate('TabCounter')}
          />
        <Button
          title="Counter"
          onPress={()=> navigation.navigate('CounterScreen')}
          />
        <Button
          title="SimpleScreen"
          onPress={()=> navigation.navigate('SimpleScreen')}
          />
        <Button
          title="PaquetesScreen"
          onPress={()=> navigation.navigate('PaquetesScreen')}
          />

      </View>
    )
}
const styles = StyleSheet.create({
    nav:{
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        position:'absolute',
        bottom:10
    }
  });