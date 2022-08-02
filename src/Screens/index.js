import React, { useRef, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { firebaseConfig } from '../../config'
import firebase from 'firebase/compat/app'



export default  function Otp({navigation})  {
    
   const [phoneNumber, setPhoneNumber] = useState('');
   const [code, setCode] = useState('');
   const [verificationId, setVerificationId] = useState(null);
   const recaptchaVerifier =useRef(null);
   const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber(phoneNumber);
   };

    const confirmCode = () => {

        try{     
            const credential = PhoneAuthProvider.credential(
            verificationId,
            code
        );

            
     signInWithCredential(auth,credential);
    Alert.alert(
        'Login Successful. Welcome To Your Journal Diary',
        
        navigation.navigate("Recoder")
    );
            } 
catch(err){ Alert.alert(
    'not successful',
    
    navigation.navigate("Home")
);}
           
        
   
        
}
       
  
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
            <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            />
            <Text style={styles.otpText}>
                Login using OTP
            </Text>
            <TextInput
                placeholder='Phone Number '
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.TextInput}
                /> 
                <TouchableOpacity style={styles.sendVerification}onPress={sendVerification}>
                    <Text style={styles.buttonText}>
                        Send Verification
                    </Text>
                </TouchableOpacity>
                <TextInput
                placeholder='Confirm code'
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.TextInput}
                />
                <TouchableOpacity style={styles.sendCode}  onPress={confirmCode}>
                    <Text style={styles.buttonText} > 
                        Confirm Verification
                    </Text >
                </TouchableOpacity>
                </View>
        </View>
    )
 
    }

const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
            
           
           
        },container1:{
          
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            width:400,
            height:700,
            borderRadius:90,
            borderBottomColor: 'blue',
            borderBottomWidth:25,
            borderTopColor:'green',
            borderTopWidth:10,
            
        },
        TextInput: {
            paddingTop:30,
            paddingBottom:20,
            paddingHorizontal:20,
            fontSize:24,
            borderBottomColor: 'blue',
            borderBottomWidth:5,
            marginBottom:20,
            textAlign:'center',
            color:'blue',
            borderRadius:10,
            backgroundColor:'white',
            borderTopColor:'green',
            borderTopWidth:5
        },
        sendVerification:{
            padding:20,
            backgroundColor:'black',
            borderRadius:10,
        },
        sendCode: {
            padding:20,
            backgroundColor:'black',
            borderRadius:10,
        },
        buttonText: {
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold',
        },
        otpText: {
            fontSize:34,
            fontWeight:'bold',
            color:'#fff',
            margin:20,
            marginBottom:100
        }
        });









