import React from 'react';
import {
  Image,
  ScrollView,
  Text,
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

//starting screen
export default function StartScreen({navigation}) {
    return(
      <View style={Styles.Setup}>
      <Image source={logo} />
      <ScrollView>
        <Text style={Styles.TitleText}>
          {' '}
          Book your Party
        </Text>
        <View
          style={Styles.SelectionView}>
          <Text style={Styles.HeaderText}>Party Room</Text>
          <Text>
            {' '}
            5 minutes- packages start at $210{'\n'} St. Michael Cinema {'\n'}{' '}
            1st Floor Party Room {'\n'} Capacity: 15
          </Text>
          <TouchableOpacity
            style={Styles.Buttons}
            onPress={() => navigation.navigate('PartyRoom')}>
            <Text style={Styles.ButtonText}>Book this Room</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.SelectionView}>
          <Text style={Styles.HeaderText}>Dining Room</Text>
          <Text>
            {' '}
            5 minutes- packages start at $210{'\n'} St. Michael Cinema {'\n'}{' '}
            2nd Floor Dining Room {'\n'} Capacity: 25
          </Text>
          <TouchableOpacity
            style={Styles.Buttons}
            onPress={() => navigation.navigate('DiningRoom')}>
            <Text style={Styles.ButtonText}>Book this Room</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style = {Styles.Buttons}onPress={() => navigation.navigate('')}>
          <Text style={Styles.SpecialButton}>
            Request a special booking?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={Styles.ButtonText} onPress={() => navigation.navigate('AdminVerifyScreen')}> Admin: manage bookings </Text>
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
SpecialButton: {
  textAlign: 'center', 
  fontSize: 15
},

SelectionView: {
  borderWidth: 4,
  padding: 5,
  paddingBottom: 10,
  margin: 10,
},

HeaderText: {
  fontWeight: 'bold',
  fontSize: 25,
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
