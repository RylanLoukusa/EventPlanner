import React,{ useState, useEffect } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet
} from 'react-native';





export default function PaymentScreen({navigation}){

  //tip adding buttons

const onNoTipPress = () => {
  Alert.alert("you chose not to tip")
}
const _5percentPress = () => {
  Alert.alert("Thank you! Your tip will be added to your total.")
}
const _10percentPress = () => {
  Alert.alert("Thank you! Your tip will be added to your total.")
}
const _20percentPress = () => {
  Alert.alert("Thank you! Your tip will be added to your total.")
}
const customTip = () => {
 Alert.alert("how much would you like to tip?")
}

 

  return(
    <View style={{backgroundColor: 'white'}}>
    <Text style={{fontSize: 25, margin: 20, padding: 15, textAlign: 'center'}}>St. Michael Cinema</Text>
    <ScrollView>
    <Text style={{fontSize: 20, padding: 20, margin: 10}}>PAYMENT {'\n'}
          'room selction' {'\n'}
          'meal deal selection with any add ons selected'</Text>
    <View style= {Styles.Setup}>
    <TouchableOpacity onPress = {() => {onNoTipPress()}} style={Styles.Buttons}>
        <Text> No TIP </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_5percentPress()}} style={Styles.Buttons}>
        <Text> 5% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_10percentPress()}} style={Styles.Buttons}>
        <Text> 10% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_20percentPress()}} style={Styles.Buttons}>
        <Text> 20% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {customTip()}} style={Styles.Buttons} > 
        <Text> Custom TIP</Text>
    </TouchableOpacity>
  </View>
  <Text style={{margin:10, fontSize: 20}}>Payment due today</Text>
    <Text style={{margin:10, fontSize: 10}}>You have a remaining balance of ___ due by your booking date. You will receive an email when your payment is due</Text>

  <TextInput style={Styles.Input} placeholder="Card number" />
    <TextInput style={Styles.Input} placeholder = "MM/YY" />
    <TextInput style={Styles.Input} placeholder = "CVV" />
    <TouchableOpacity style={Styles.Buttons}>
    <Text style={Styles.ButtonText}>Process my Payment and Book my Event</Text>
    </TouchableOpacity>
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
