import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
