import React, {useState} from 'react';
import { View, Text, Alert, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from 'react-native';


function BloodRequestsScreen ({navigation}) {
    const pressHandler = () => {
        Alert.alert("Accepted...Contact the Patient Immediately...+91 9876543210")
          }
    
        return (
          <View style={Styles.container}>
          <StatusBar 
    barStyle='light-content'
    backgroundColor='red'
    translucent
    />
    <Text style={Styles.title}>HELP US</Text>
            <ScrollView>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Anbu                      0+                      21 </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Navl                      B+                      56</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Love                      A+                      34</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Selv                      AB-                      12</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Nanb                      B-                      76</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Dura                      0+                      21</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Unkn                      0+                      21</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Prof                      0-                        21</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Anbu                      0+                      21 </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Navl                      B+                      56</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Love                      A+                      34</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Selv                      AB-                      12</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Nanb                      B-                      76</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Dura                      0+                      21</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Unkn                      0+                      21</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Styles.signinButton} onPress={() => pressHandler()}>
      <Text style={Styles.signinButtonText}>Prof                      0-                        21</Text>
    </TouchableOpacity>
    
    </ScrollView>
    <TouchableOpacity style={Styles.CloseButton} 
    onPress={() => navigation.navigate("Home")}
    >
      <Text style={Styles.CloseButtonText}>Close</Text>
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
       marginLeft: 130,
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
    borderRadius: 10,
    marginHorizontal: 1,
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
},
signinButtonText: {
   fontSize: 23,
   lineHeight: 18 * 1.4,
   color: 'white',
},
CloseButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    marginHorizontal: 85,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    padding: 8,
},
CloseButtonText: {
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

export default BloodRequestsScreen ;

  