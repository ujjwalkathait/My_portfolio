import logo from './logo.svg';
import './App.scss';
import { Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
