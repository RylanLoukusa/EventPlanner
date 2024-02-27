import React from "react";

const Payment = ()  =>  {
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
    <View style= {{flexDirection: 'row', justifyContent: 'center', fontSize: 20}}>
    <TouchableOpacity onPress = {() => {onNoTipPress()}} style={{backgroundColor: 'orange', paddingLeft: 10, paddingRight: 10}}>
        <Text> No TIP </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_5percentPress()}} style={{backgroundColor: 'orange', paddingLeft: 10, paddingRight: 10}}>
        <Text> 5% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_10percentPress()}} style={{backgroundColor: 'orange', paddingLeft: 10, paddingRight: 10}}>
        <Text> 10% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {_20percentPress()}} style={{backgroundColor: 'orange', paddingLeft: 10, paddingRight: 10}}>
        <Text> 20% </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {customTip()}} style={{backgroundColor: 'orange', paddingLeft: 10, paddingRight: 10}} > 
        <Text> Custom TIP</Text>
    </TouchableOpacity>
  </View>
  <Text style={{margin:10, fontSize: 20}}>Payment due today</Text>
    <Text style={{margin:10, fontSize: 10}}>You have a remaining balance of ___ due by your booking date. You will receive an email when your payment is due</Text>

  <TextInput style={{padding: 10}} placeholder="Card number" />
    <TextInput style={{padding: 10}} placeholder = "MM/YY" />
    <TextInput style={{padding: 10}} placeholder = "CVV" />
    <TouchableOpacity style={{backgroundColor: 'orange', margin: 10}}>
    <Text style={{textAlign: 'center'}}>Process my Payment and Book my Event</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

export default Payment;
