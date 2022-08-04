import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import DashboardScreen from './screens/DashboardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import PricingScreen from './screens/PricingScreen';

function App() {

  const isUser = localStorage.getItem('userInfo')

  console.log(isUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/pricing" element={<PricingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
