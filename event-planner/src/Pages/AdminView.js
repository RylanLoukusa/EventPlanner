import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';



function UpcomingEvents() {
  return (
    <View style = {{padding: 30, backgroundColor: 'white'}}>
    <TouchableOpacity><Text style={{ textAlign: 'right', margin: 20, fontSize: 20}}>Add A Host</Text></TouchableOpacity>
    <View style = {Styles.Setup}>
    <Text> Date </Text>
    <Text> Party name and type </Text>
    </View>
    </View>
  );
}

function PastEvents() {
  return (
    <View style={Styles.Setup}>
    </View>
  );
}

function CreateEvents({navigation}) {
  return (
    <View style={Styles.Setup}>
      <Text style={Styles.TitleText}>What kind of booking do you require?</Text>
      <View style={Styles.SelectionView}>
        
        
        <Text style={Styles.Header}>Auditorium Rental</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('AuditoriumQuestions')} style={Styles.Buttons}><Text style = {Styles.ButtonText}>Book Now</Text></TouchableOpacity>


        <Text style={Styles.Header}>Third Floor Event</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('ThirdFloorQuestions')} style={Styles.Buttons}><Text style = {Styles.ButtonText}>Book Now</Text></TouchableOpacity>


        <Text style={Styles.Header}>Field Trip</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('FieldTripQuestions')} style={Styles.Buttons}><Text style = {Styles.ButtonText}>Book Now</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function AdminViewScreen({navigation}){
   return (
    <Drawer.Navigator>
      <Drawer.Screen name="Upcoming Events" component={UpcomingEvents} />
      <Drawer.Screen name="Past Events" component={PastEvents} />
      <Drawer.Screen name="Create Special Event" component={CreateEvents} />
    </Drawer.Navigator>
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
