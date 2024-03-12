import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function UpcomingEvents() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function PastEvents() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function CreateEvents() {
  return (
    <View style={{ flex: 1}}>
      <Text style={{padding: 15, margin: 20, textAlign: 'center', fontSize: 45, color: 'grey'}}>What kind of booking do you require?</Text>
      <View style={{alignItems: 'center', borderWidth: 4, margin: 20}}>
        <Text style={{fontSize: 25}}>Auditorium Rental</Text>
        <TouchableOpacity style={{backgroundColor: 'orange', margin:15, padding: 5}}><Text>Book Now</Text></TouchableOpacity>
        <Text style={{fontSize: 25}}>Third Floor Event</Text>
        <TouchableOpacity style={{backgroundColor: 'orange', margin:15, padding: 5}}><Text>Book Now</Text></TouchableOpacity>
        <Text style={{fontSize: 25}}>Field Trip</Text>
        <TouchableOpacity style={{backgroundColor: 'orange', margin:15, padding: 5}}><Text>Book Now</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function AdminViewScreen(){
   return (
    <Drawer.Navigator>
      <Drawer.Screen name="Upcoming Events" component={UpcomingEvents} />
      <Drawer.Screen name="Past Events" component={PastEvents} />
      <Drawer.Screen name="Create Special Event" component={CreateEvents} />
    </Drawer.Navigator>
  );
}
