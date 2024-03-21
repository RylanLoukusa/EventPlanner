import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

export default function ThirdFloorQuestions(){
  return(
  <View> 
    <Text style={{fontSize:35, fontWeight:'bold', padding:15, marginTop:30, marginBottom:20, textAlign: 'center'}}>Third Floor Rental</Text>
  <View style={{borderWidth:4, marginLeft:30, marginRight:30}}>
    <Text style={{margin:20, color: 'orange', fontSize: 20}}>What is the name of your Business / Organization</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>

    <Text style={{margin:20, color: 'orange', fontSize: 20}}>Expected Attendance</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>

    <Text style={{margin:20, color: 'orange', fontSize: 20}}>Do you have any requests regarding our catering menu?</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>

    <Text style={{margin:20, color: 'orange', fontSize: 20}}>Do you have any requests regarding our catering menu?</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>
  </View>
</View>
  ); 
}
const Styles = StyleSheet.create({

Setup: {
  backgroundColor: 'white',
  alignItems: 'center',
},

Buttons: {
  backgroundColor: 'orange',
  margin: 10,
},

ButtonText: {
  textAlign: 'center',
},

SelectionView: {
  borderWidth: 4,
  padding: 5,
  paddingBottom: 10,
  margin: 10,
},

HeaderText: {
  fontWeight: 'bold',
  textSize: 25,
},

TitleText: {
  fontSize: 40,
  paddingBottom: 50,
  color: 'grey',
  textAlign: 'center',
},

Input:{
  padding:5,
  margin:20, 
  borderWidth:1,
},

Header:{
  padding: 20, 
  textAlign: 'center', 
  fontSize: 20,
},

InputPrompt:{
  color: 'orange',
  fontSize: 15,
  margin: 30,
}
});
