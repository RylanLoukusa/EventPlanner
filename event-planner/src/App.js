import React from "react";
import Navbar from "./Components/Navbar";
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
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/date" element={<Date />} />
                <Route path="/information" element={<Information />} />
                <Route path="/information-special" element={<InformationSpecial />} />
                <Route path="/meal-deal" element={<MealDeal />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/questionaire" element={<Questionaire />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </Router>
    );
}
 
export default App;
