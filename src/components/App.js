import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import DummyHome from '../components/DummyHome';
import DummyStore from '../components/DummyStore';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store/*" element={<DummyStore />} />
      </Routes>
    </>
  );
}

export default App;
