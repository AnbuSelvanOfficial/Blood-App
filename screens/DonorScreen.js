import React, {useState} from 'react';
import { View, Text, Alert, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';


function DonorScreen({navigation}) {
    const pressHandler = () => {
        Alert.alert("Thank you for your kind Heart..Wait for Blood Requests..")
          }
    
        return (
          <View style={Styles.container}>
          <StatusBar 
    barStyle='light-content'
    backgroundColor='red'
    translucent
    />
    
    <Text style={Styles.title}>WILL TO DONATE ?</Text>
       <View style={Styles.inputContainer}>
      <View style={Styles.inputSubContainer}>
       
        <TextInput 
        placeholder='Donor Name' 
        placeholderTextColor="grey"
        selectionColor="grey"
        style={Styles.inputText}
        />
      </View>
    </View>

    <View style={Styles.inputContainer}>
      <View style={Styles.inputSubContainer}>
        
      <TextInput 
        placeholder='Age' 
        placeholderTextColor="grey"
        selectionColor="grey"
        style={Styles.inputText}
        />
      </View>
    </View>
      <View style={Styles.inputContainer}>
        <View style={Styles.inputSubContainer}>
        
        <TextInput
        placeholder='Blood Group' 
        placeholderTextColor="grey"
        selectionColor="grey"
        style={Styles.inputText}/>
        
        </View> 
      </View>
      <View style={Styles.inputContainer}>
        <View style={Styles.inputSubContainer}>
        
        <TextInput
        placeholder='Location' 
        placeholderTextColor="grey"
        selectionColor="grey"
        style={Styles.inputText}/>
        
        </View> 
      </View>
    

      <View style={Styles.inputContainer}>
        <View style={Styles.inputSubContainer}>
        
        <TextInput
        placeholder='Last Donated Date' 
        placeholderTextColor="grey"
        selectionColor="grey"
        style={Styles.inputText}/>
        
        </View> 
      </View>
      
      
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Donate </Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.signinButton} 
    onPress={() => navigation.navigate("Home")}
    >
      <Text style={Styles.signinButtonText}>Close</Text>
    </TouchableOpacity>
    
       </View>
        );
    };


      const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9f7fa',
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 20,
      lineHeight: 20 * 1.4,
      textAlign: 'center',
      color: 'black',
    },
    title: {
      fontWeight: '600',
       fontSize: 30,
       lineHeight: 20 * 4.4,
       marginTop: 100,
       marginBottom: 10,
       marginHorizontal: 20,
       color: 'black',
       alignItems: 'center',
       marginLeft: 70,
    },
    content:{
      fontSize: 20,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
      color: 'black'
    },
    inputContainer: {
      backgroundColor: "#EAEAEA",
      paddingHorizontal: 10,
      marginHorizontal: 20, 
      borderRadius: 30,
      borderWidth: 0.8,
      borderColor: 'black',
      justifyContent: 'center',
      marginBottom: 10,
    },
    content:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        color: 'black',
        marginLeft: 130
      },
   
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
     fontSize: 18,
     textAlignVertical: 'center',
     padding: 13,
     color: 'black',
     flex: 1,
  },
  forgotPasswordContainer: {
     marginHorizontal: 20,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
  },
  rememberMeText: {
     marginLeft: 10,
     fontSize: 15,
     lineHeight: 12 * 1.4,
     color: 'black', 
  },
  forgotPasswordText: {
       fontSize:15,
       lineHeight: 12 * 4,
       color: 'black',
       marginLeft: 70,
  },
  signinButton: {
       backgroundColor: 'red',
       borderRadius: 30,
       marginHorizontal: 85,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 20,
       padding: 8,
  },
  signinButtonText: {
      fontSize: 20,
      lineHeight: 18 * 1.4,
      color: 'white',
      fontWeight: "bold"
  },
  signupContainer: {
      marginHorizontal: 20,
      justifyContent: 'center',
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  accountText: {
       fontSize: 13,
       lineHeight: 13 * 1.4,
       color: 'black',
  },
  signupText: {
       fontSize: 28,
       lineHeight: 13 * 4,
       color: 'black',
       marginLeft: 5,
  },
 
  });

export default DonorScreen;

  