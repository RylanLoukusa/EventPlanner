import React from 'react';
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

//image logo
  const logo = {
  uri: 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w',
  width: 400,
  height: 225,
};

export default function AdminVerifyScreen({navigation}){
    return(
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>

      <Image source={logo} />
      
  <View style={{borderWidth: 4, paddingTop: 60, margin: 10}}>

      <Text style={{padding: 20, textAlign: 'center', fontSize: 20}}> In order to continue please enter your credentials {'\n'}</Text>

        <Text style={{marginLeft: 30, color: 'orange'}}>First Name</Text
        >
        <TextInput style={{margin: 30, borderWidth: 1, fontSize: 15}} placeholder="Last Name" required="required"/>

        <Text style={{marginLeft: 30, color: 'orange'}}>Last Name</Text>

        <TextInput style={{margin: 30, borderWidth: 1, fontSize: 15}} placeholder="First Name" required="required"/>

        <Text style={{marginLeft: 30, color: 'orange'}}>Passcode</Text>

        <TextInput style={{margin: 30, borderWidth: 1, fontSize: 15}} placeholder="Passcode" required="required"/>

        <TouchableOpacity style = {{backgroundColor: 'orange', marginLeft: 150, marginRight: 150,}} onPress={() => navigation.navigate('AdminViewScreen')}>

          <Text style={{textAlign: 'center'}}>Submit</Text>

        </TouchableOpacity>
  </View>
      </View>
    );
}
