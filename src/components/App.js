import { Route, Routes } from 'react-router-dom';
import DummyHome from './DummyHome';
import Store from './Store';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store/*" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
