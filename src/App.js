import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from './pages/Home'

function App() {
  return (
    <div>
      {/* <div className="min-h-full max-w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* </div> */}
          {/* </div> */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;