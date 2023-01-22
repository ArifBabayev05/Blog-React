
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <HomePage />
        } />

        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Route>


    </Routes>

  );
}

export default App;
