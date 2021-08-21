import React from 'react'
import { View,FlatList,StyleSheet } from 'react-native'
import {paquetes} from '../assets/data.json'
import { Card } from '../components/Card'

export const PaquetesScreen = ({navigation}) => {
    return (
        <View style={styles.body}>
            <FlatList
                data={paquetes.super}
                renderItem={({item})=> <Card method={()=> navigation.navigate('SendScreen',{item})}  
                data={item}/>}
                />
            {/* <Nav navigation={navigation}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },

})
