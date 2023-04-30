import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './screens/MainScreen';
import LoginPage from './screens/LoginPage';


function App() {
  return (
    <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
