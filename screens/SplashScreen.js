import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';

function SplashScreen({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    },3000)
  }, []);

  return (
    <View style={Styles.container}>
      <StatusBar  
            barStyle="light-content"
            backgroundColor='red'
            translucent
      />
      
      <Image style={Styles.splash} 
      source={require('../assets/Blood.jpg')} />

      <Text style={Styles.head}>BLOOD DONATION</Text>
     
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }, 
  splash: {
    height: 250,
    width: 200,
    borderRadius: 25,
  },
  head: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default SplashScreen;