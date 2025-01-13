import logo from './logo.svg';
import './App.scss';
import { Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route pa
      th="/" element={<Layout />} >
      </Route>
    </Routes>
    </>
  );
}

export default App;
