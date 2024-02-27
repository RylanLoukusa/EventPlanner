import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//image logo
  const logo = {
  uri: 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w',
  width: 400,
  height: 225,
};
const Home =({navigation})  =>  {
  return(
 <View style={{backgroundColor: 'white'}}>
      <Image source={logo} />
      <ScrollView>
        <Text style={{fontSize: 40, paddingBottom: 50, color: 'grey', textAlign: 'center'}}>
          {' '}
          Book your Party
        </Text>
        <View
          style={{borderWidth: 4, padding: 5, paddingBottom: 10, margin: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Party Room</Text>
          <Text>
            {' '}
            5 minutes- packages start at $210{'\n'} St. Michael Cinema {'\n'}{' '}
            1st Floor Party Room {'\n'} Capacity: 15
          </Text>
          <TouchableOpacity
            style={{backgroundColor: 'orange', margin: 10}}
            onPress={() => navigation.navigate('PartyRoom')}>
            <Text style={{textAlign: 'center'}}>Book this Room</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 10, padding: 5, borderWidth: 4, margin: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Dining Room</Text>
          <Text>
            {' '}
            5 minutes- packages start at $210{'\n'} St. Michael Cinema {'\n'}{' '}
            2nd Floor Dining Room {'\n'} Capacity: 25
          </Text>
          <TouchableOpacity
            style={{backgroundColor: 'orange', margin: 10}}
            onPress={() => navigation.navigate('DiningRoom')}>
            <Text style={{textAlign: 'center'}}>Book this Room</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style = {{backgroundColor: 'orange', margin: 10}}onPress={() => navigation.navigate('informationSpecial')}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Request a special booking?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text> Admin: manage bookings </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
 };

export default Home;
