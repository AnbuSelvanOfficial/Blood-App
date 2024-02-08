import React, {useState} from 'react';
import { View, Text, Alert, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { auth } from "../firebase";   
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotpasswordScreen({navigation}) {
   
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

    return (
      <View style={Styles.container}>
       <StatusBar  
            barStyle="light-content"
            backgroundColor= "red"
            translucent
      />
       
       <View style={Styles.headerContainer}>
         
         <Text style={Styles.headerTitle}></Text>
       </View>
       <Text style={Styles.title}>FORGOT PASSWORD</Text>
        <Text>{errorMessage}</Text>
       
     <View style={Styles.inputContainer}>
       <View style={Styles.inputSubContainer}>
         
       <TextInput 
         placeholder='Email' 
         placeholderTextColor="grey"
         selectionColor="grey"
         style={Styles.inputText}
         value={email}
         onChangeText={setEmail}
         />
       </View>
     </View>

     <TouchableOpacity style={Styles.signinButton} 
     onPress={resetPassword}
     >
       <Text style={Styles.signinButtonText}>Reset Password</Text>
     </TouchableOpacity>  

     <View style={Styles.signupContainer}>
        <Text style={Styles.accountText}>Don't have account ?</Text>

        <Text
          style={Styles.signupText}
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Text>
      </View>
   
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
      color: 'black'
    },
    title: {
      fontWeight: '600',
       fontSize: 30,
       lineHeight: 20 * 4.4,
       marginTop: 100,
       marginBottom: 10,
       marginHorizontal: 20,
       color: 'black',
       marginLeft : 70
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
       lineHeight: 12 * 1.4,
       color: 'black',
       marginLeft: 120,
  },
  signinButton: {
       backgroundColor: 'red',
       borderRadius: 30,
       marginHorizontal: 85,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 20,
       padding: 8,
       marginBottom: 20,
  },
  signinButtonText: {
      fontSize: 20,
      lineHeight: 18 * 1.4,
      color: 'white',
      fontWeight: "bold",
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
       fontSize: 18,
       lineHeight: 13 * 1.4,
       color: 'red',
       marginLeft: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
  });

export default ForgotpasswordScreen;

  