import logo from './logo.svg';
import './App.scss';
import { Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={}
      </Route>
    </Routes>
    </>
  );
}

export default App;
