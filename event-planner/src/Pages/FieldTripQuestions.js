import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

export default function FieldTripQuestions(){
 return(
 <View> 
    <Text style={{fontSize:35, fontWeight:'bold', padding:15, marginTop:30, marginBottom:20, textAlign: 'center'}}>Field Trip Questions</Text>
  <View style={{borderWidth:4, marginLeft:30, marginRight:30}}>
    <Text style={{margin:20, color: 'orange', fontSize: 20}}>What is your school / organization</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>

    <Text style={{margin:20, color: 'orange', fontSize: 20}}>What movie would you like to see?</Text>
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>

    <Text style={{margin:20, color: 'orange', fontSize: 20}}>Any other details we should know about?</Text>
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
