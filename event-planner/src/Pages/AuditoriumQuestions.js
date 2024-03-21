import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';



export default function AuditoriumQuestions(){
  return(
  <View> 
    <ScrollView>
     <Text style={{fontSize:35, fontWeight:'bold', padding:15, marginTop:30, marginBottom:20, textAlign: 'center'}}>Auditorium Rental Questions</Text>
     
  <View style={{borderWidth:4, marginLeft:30, marginRight:30}}>
    <Text style={{margin:10, color: 'orange', fontSize: 20}}>What are you celebrating?</Text>
      <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/> 

    <Text style={{margin:10, color: 'orange', fontSize: 20}}>If you are celebrating a birthday, what age are you celebrating and what is their name?</Text>   
    <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>    

    <Text style={{margin:10, color: 'orange', fontSize: 20}}>What movie to you plan to bring? (or enter the current movie you plan to see) </Text>
      <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/>    

    <Text style={{margin:10, color: 'orange', fontSize: 20}}>Expected Attendance? </Text>
      <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/> 

    <Text style={{margin:10, color: 'orange', fontSize: 20}}>Tell us what type of pizza you want and how many. (choice of cheese, sausage, pepperoni, or sausage & pepperoni)</Text>
      <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/> 

    <Text style={{margin:10, color: 'orange', fontSize: 20}}>What else would you like us to know about your event?</Text>
      <TextInput placeholder='input:' style={{padding:5, margin:20, borderWidth:1}}/> 
      
    <Text style={{margin:10, color: 'orange', fontSize: 20}}>Please acknowledge that you will need to bring in your media 7-10 days before your event in order to format your movie properly.</Text>
   <Text>Checkbox here</Text>
  </View>
  </ScrollView>
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
