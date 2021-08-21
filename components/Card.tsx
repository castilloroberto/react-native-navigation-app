import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const Card = (props) => {
    const {key,description,duration,price,title} = props.data
    return (
        <Pressable 
            onPress={props.method}
            style={styles.card}>
            <Text style={styles.title}>{title}</Text>   
            <Text style={styles.desc}>{description}</Text> 
            <View style={styles.bottom}>
            <Text>{duration}</Text>   
            
            <Text>Precio: {price}</Text>   
            </View>     
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'95%',
        height:150,
        elevation:5,
        padding:5,
        alignItems:'flex-start',
        justifyContent:'space-around',
        backgroundColor:'white',
        margin:10,
        marginHorizontal:10,
        borderRadius:5,
        
    },
    title:{
        fontWeight:'bold'
    },
    bottom:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    desc:{
        color:'gray'
    }
})
