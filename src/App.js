import React from "react";
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import HomePage from './pages/Home'
import MainEdit from "./pages/EditUser/MainEdit"
import CalendarCard from "./components/CalendarCar/Card";
import  {ContextProvider}  from './Context/Context'
// https://medium.com/@kaklotarrahul79/how-to-do-crud-operations-in-reactjs-52a9347954f3
// https://www.shecodes.io/athena/9359-how-to-read-and-delete-json-data-in-react
//https://stackoverflow.com/questions/74335838/how-to-delete-user-account-when-user-clicks-delete-button-in-react


function App() {

  return (
    <div>
      {/* <div className="min-h-full max-w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
      <ContextProvider>
        <Router>

          <Routes>
            <Route exact path="/home" element={<HomePage />} />

            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            {/* Organiazar este componente con sus respectivas rutas */}
            <Route exact path="/editar/:routeParams" element={<MainEdit />} />
            <Route exact path="/calendario/:routeParams" element={ <CalendarCard />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;