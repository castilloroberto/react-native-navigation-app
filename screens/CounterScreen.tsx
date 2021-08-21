import React,{useState} from 'react'
import { View,StyleSheet, Button,Text } from 'react-native'
import { Nav } from '../components/Nav'

export const CounterScreen = ({navigation}) => {
    const [counter, setCounter] = useState(0)
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{counter}</Text>
            <Button
                title="Sumar" 
                onPress={()=> setCounter(counter+1)} />
            <Nav navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:30,
    }
})
