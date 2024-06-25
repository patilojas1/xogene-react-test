import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Drug from './components/Drug';
import Search from './components/search';

function App() {
  return (
    <>
    <Routes>
      <Route path='/drugs/search' element={<Search/>}/>
      <Route path='/drugs/:drug_name' element={<Drug/>}/>
    </Routes>
    </>
  );
}

export default App;
