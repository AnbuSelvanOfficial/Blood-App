import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

function SignupScreen({ navigation }) {
    
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate("Home", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

    return (
      <View style={Styles.container}>
       <StatusBar  
            barStyle="light-content"
            backgroundColor="red"
            translucent
      />
       
       <View style={Styles.headerContainer}>
         
         <Text style={Styles.headerTitle}></Text>
       </View>
       <Text style={Styles.title}>CREATE ACCOUNT</Text>
       <Text >{validationMessage}</Text>
     <View style={Styles.inputContainer}>
       <View style={Styles.inputSubContainer}>
       
       <TextInput 
         placeholder="Email" 
         placeholderTextColor="grey"
         selectionColor="grey"
         style={Styles.inputText}
         value={email}
         onChangeText={setEmail}
         />
       </View>
     </View>
     
       <View style={Styles.inputContainer}>
         <View style={Styles.inputSubContainer}>
         
         <TextInput
         secureTextEntry={true} 
         placeholder='Password' 
         placeholderTextColor="grey"
         selectionColor="grey"
         style={Styles.inputText}
         value={password}
         onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} 
         />
   
         </View> 
       </View>
       <View style={Styles.inputContainer}>
         <View style={Styles.inputSubContainer}>

         <TextInput
         secureTextEntry={true} 
         placeholder='Confirm Password' 
         placeholderTextColor="grey"
         selectionColor="grey"
         style={Styles.inputText}
         value={confirmPassword}
         onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
         />
         
         </View> 
       </View>
       
       
     <TouchableOpacity style={Styles.signinButton} 
     onPress={signUp}
     >
       <Text style={Styles.signinButtonText}>Create Account</Text>
     </TouchableOpacity>

     <View style={Styles.signupContainer}>
        <Text style={Styles.accountText}>Already Have Account ?</Text>

        <Text
          style={Styles.signupText}
          onPress={() => navigation.navigate("Login")}
        >
          Login
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
      fontWeight: 'bold',
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

export default SignupScreen;

  