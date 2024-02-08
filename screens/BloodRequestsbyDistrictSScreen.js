import React, {useState} from 'react';
import { View, Text, Alert, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from 'react-native';


function BloodRequestsbyDistrictS ({navigation}) {
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

    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Ariyalur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Chengalpattu</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Chennai</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Coimbatore</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Cuddalore</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Dharmapuri</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Dindigul</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Erode</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Kallakurichi</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Kanchipuram</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Kanniyakumari</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Karur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Krishnagiri</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Madurai</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Mayiladuthurai</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Nagapattinam</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Namakkal</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Nilgiris</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Perambalur</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Pudukkottai</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Ramanathapuram</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Ranipet</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Salem</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Sivagangai</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tenkasi</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Thanjavur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Theni</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Thoothukudi</Text>
    </TouchableOpacity>    
  
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tiruchirappalli</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tirunelveli</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tirupathur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tiruppur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tiruvallur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tiruvannamalai</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Tiruvarur</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Vellore</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Viluppuram</Text>
    </TouchableOpacity>    
    
    <TouchableOpacity style={Styles.signinButton} 
     onPress={() => navigation.navigate("BloodRequestsS")}>
       <Text style={Styles.signinButtonText}>Virudhunagar</Text>
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
  borderRadius: 30,
  marginHorizontal: 85,
  justifyContent: 'left',
  alignItems: 'left',
  marginTop: 20,
  padding: 8,
  marginLeft: 40,
},
signinButtonText: {
 fontSize: 20,
 lineHeight: 18 * 1.4,
 color: 'white',
 fontWeight: "bold",
 marginLeft: 10,
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

export default BloodRequestsbyDistrictS ;

  