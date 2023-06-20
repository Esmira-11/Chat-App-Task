import './App.css';
import {Routes, Route,Navigate } from "react-router-dom";
import { Chat } from './pages/Chat';
import { Layout } from './components/Layout';
import { RegisterPage } from './pages/Auth/Register';
import { LoginPage } from './pages/Auth/Login';
import ConfirmPage from './pages/Auth/ConfirmPage';



function App() {

  const user = localStorage.getItem("token")

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={user ? <Chat /> : <Navigate to="/signin"/>}  />
      <Route path="/signin" element={!user ? <LoginPage /> : <Navigate to="/"/>} />
      <Route path="/signup" element={!user ?<RegisterPage />: <Navigate to="/"/>} />
      <Route path="/confirm" element={!user ?<ConfirmPage />: <Navigate to="/"/>}  />
    </Route>
  </Routes>
  );
}

export default App;
