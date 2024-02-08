import React, {useState} from 'react';
import { View, Text, Alert, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';


function HomeScreen({navigation}) {
    
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
     <Text style={Styles.title}>HOME</Text>
     <Text style={Styles.content}>
       WELCOME BACK
        </Text>
       
     <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("RequestS")}>
       <Text style={Styles.signinButtonText}>Need Blood</Text>
     </TouchableOpacity>

     <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("DonorS")}>
       <Text style={Styles.signinButtonText}>Want to be Donor ?</Text>
     </TouchableOpacity>

     <TouchableOpacity style={Styles.signinButton}
     onPress={() => navigation.navigate("BloodRequestsbyDistrictS")}>
       <Text style={Styles.signinButtonText}>Blood Requests </Text>
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
       marginLeft: 150,
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

export default HomeScreen;

  