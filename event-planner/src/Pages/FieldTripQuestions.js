import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
