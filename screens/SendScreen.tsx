import React, { useState } from 'react'
import { Pressable, StyleSheet,TouchableOpacity, View,PermissionsAndroid } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Card } from '../components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Recarga, AppProps } from './AppParamList';

const permiso = PermissionsAndroid.PERMISSIONS.READ_CALENDAR

export const SendScreen = ({navigation,route}:AppProps<'SendScreen'>) => {
    const [numero, setNumero] = useState('')
    const {item} = route.params

    return (
        <View style={styles.body}>

            <Card data={item}/>

            <View style={styles.inputs}>
                <View style={styles.numero} >
                    <TextInput 
                    style={styles.num}
                    textAlign={'center'}
                    value={numero}
                    onChangeText={setNumero}
                    keyboardType="numeric"
                    placeholder="Numero"/>
                        
                     <Pressable onPress={()=> setNumero('')}>
                        <Icon name="times" color="gray" size={20}/>
                     </Pressable>
                </View>
                
                
                <TouchableOpacity
                    onPress={()=> Enviar(item,numero)} 
                    style={styles.btn}>
                    <Icon 
                    color="#ffff" 
                    name="arrow-right" 
                    size={20} 
                    />
                </TouchableOpacity>   
               
                  
              
            </View>

        </View>
    )
}

async function Enviar(recarga:{},numero:string) {
    const res = await PermissionsAndroid.check(permiso) 
    if (!res)
        askPermission()
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        backgroundColor:'#00a8ff',
        elevation:5
    },
    numero:{
        padding:10,
        width:'80%',
        height:'100%',
        backgroundColor:'#ffff',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    num:{
        fontSize:20,
        width:'90%',
        height:'100%'
    },
    inputs:{
        position:'absolute',
        bottom:20,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    
})

const askPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        permiso,
        {
          title: "Permisos de app",
          message:
            "Esta app necesita acceso a funcionalidades de llamadas",
          buttonNeutral: "Preguntar luego",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the permisons");
      } else {
        console.log("permission denied");
      }
      
    } catch (err) {
      console.warn(err);
    }
  };