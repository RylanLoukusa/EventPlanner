import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Date from "./Pages/Date";
import Information from "./Pages/Information";
import InformationSpecial from "./Pages/InformationSpecial";
import MealDeal from "./Pages/MealDeal";
import Payment from "./Pages/Payment";
import Questionaire from "./Pages/Questionaire";
import Summary from "./Pages/Summary";
import AuditoriumQuestions from "./Pages/AuditoriumQuestions";
import FieldTripQuestions from "./Pages/FieldTripQuestions";
import ThirdFloorQuestions from "./Pages/ThirdFloorQuestions";
import AdminVerifyScreen from "./Pages/AdminVerify"
import AdminViewScreen from "./Pages/AdminView"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



 const Stack = createStackNavigator();
 
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AdminVerify" component={AdminVerify} />
          <Stack.Screen name="AdminView" component={AdminView} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="AuditoriumQuestions" component={AuditoriumQuestions} />
          <Stack.Screen name="ThirdFloorQuestions" component={ThirdFloorQuestions} />
          <Stack.Screen name="FieldTripQuestions" component={FieldTripQuestions} />
          <Stack.Screen name="Summary" component={Summary}/>
          <Stack.Screen name="Questionaire" component={Questionaire}/>
          <Stack.Screen name="Contact" component={Contact}/>
          <Stack.Screen name="Date" component={Date}/>
          <Stack.Screen name="MealDeal" component={MealDeal}/>
          <Stack.Screen name="Information" component={Information}/>
          <Stack.Screen name="InformationSpecial" component={InformationSpecial}/>
    
        </Stack.Navigator>
      </NavigationContainer>

  );
}
 
export default App;
