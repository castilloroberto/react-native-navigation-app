import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Nav } from '../components/Nav';

export default function TabCounter({navigation}) {
  const [clicks,setClicks] = useState(0)
  return (
    <Pressable
      onPress={()=> setClicks(clicks+1)} 
      style={styles.container}>
      <Text style={styles.text} >Clicks</Text>
      <Text style={styles.text} >{clicks}</Text>

      <Nav navigation={navigation}/>
      
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  text:{
    fontSize:20,
    textAlign:'center',
    

  },
 
});
