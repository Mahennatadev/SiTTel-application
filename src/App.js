import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Dashboard';
import Unggah from './Pages/Unggah';
import KaryawanStatusDoc from './Pages/KaryawanStatusDoc';
import KaryawanRiwayatDoc from './Pages/KaryawanRiwayatDoc';
import DashboardPre from './Pages/DashboardPre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboardpre' element={<DashboardPre />} />
        <Route path='/karyawanUnggah' element={<Unggah />} />
        <Route path='/karyawanStatus' element={<KaryawanStatusDoc />} />
        <Route path='/karyawanRiwayat' element={<KaryawanRiwayatDoc />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
