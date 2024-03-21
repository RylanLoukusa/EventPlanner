import React from 'react';
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';


//image logo
  const logo = {
  uri: 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w',
  width: 400,
  height: 225,
};

export default function AdminVerifyScreen({navigation}){
    return(
      <View style={Styles.Setup}>

      <Image source={logo} />
      
  <View style={Styles.SelectionView}>

      <Text style={Styles.Header}> In order to continue please enter your credentials {'\n'}</Text>

        <Text style={Styles.InputPrompt}>First Name</Text
        >
        <TextInput style={Styles.Input} placeholder="Last Name" required="required"/>

        <Text style={Styles.InputPrompt}>Last Name</Text>

        <TextInput style={Styles.Input} placeholder="First Name" required="required"/>

        <Text style={Styles.InputPrompt}>Passcode</Text>

        <TextInput style={Styles.Input} placeholder="Passcode" required="required"/>

        <TouchableOpacity style = {Styles.Buttons} onPress={() => navigation.navigate('AdminViewScreen')}>

          <Text style={Styles.ButtonText}>Submit</Text>

        </TouchableOpacity>
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






