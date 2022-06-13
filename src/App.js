import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ZonePack from './components/ZonePack';
import Bacs from './components/Bacs';
import ManuelControl from './components/ManuelControl';
import Emplacements from './components/Emplacements';
import ZoneProcess from './components/ZoneProcess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/zone-pack' element={<ZonePack />}></Route>
        <Route path='/controle-manuel' element={<ManuelControl />}></Route>
        <Route path='/bacs' element={<Bacs />}></Route>
        <Route path='/emplacements' element={<Emplacements />}></Route>
        <Route path='/zone-process' element={<ZoneProcess />}></Route>
      </Routes>
      <ToastContainer
        theme='colored'
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  );
}

export default App;
