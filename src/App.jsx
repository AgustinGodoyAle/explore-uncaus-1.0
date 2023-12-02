import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';

import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { HelpScreen } from "./routes/HelpScreen"
import { EdificiosScreen } from "./routes/EdificiosScreen";
import { EventosScreen } from "./routes/EventosScreen";


import { LoginScreen } from "./routes/LoginScreen";
import { RegisterScreen } from "./routes/RegisterScreen";

function App() {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        
        <Route path='/edificios' element={<EdificiosScreen></EdificiosScreen>}></Route>
        <Route path='/eventos' element={<EventosScreen></EventosScreen>}></Route>

        <Route path='/about' element={<AboutScreen></AboutScreen>}></Route>
        <Route path='/help' element={<HelpScreen></HelpScreen>}></Route>


        <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
        <Route path='/register' element={<RegisterScreen></RegisterScreen>}></Route>

        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
