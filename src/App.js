import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import NotFound from './Pages/NotFound';
import KaryawanDashboard from './Pages/KaryawanDashboard';
import KaryawanUnggah from './Pages/KaryawanUnggah';
import KaryawanStatusDoc from './Pages/KaryawanStatusDoc';
import KaryawanRiwayatDoc from './Pages/KaryawanRiwayatDoc';
import KaryawanDashboardPre from './Pages/KaryawanDashboardPre';
import ManajerDashboard from './Pages/ManajerDashboard';
import ManajerDashboardPre from './Pages/ManajerDashboardPre';
import ManajerPermintaan from './Pages/ManajerPermintaan';
import ManajerRiwayat from './Pages/ManajerRiwayat';
import MTinjauDokumen from './Components/MTinjauDokumen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/karyawanDashboard' element={<KaryawanDashboard />} />
        <Route path='/karyawanDashboardPre' element={<KaryawanDashboardPre />} />
        <Route path='/karyawanUnggah' element={<KaryawanUnggah />} />
        <Route path='/karyawanStatus' element={<KaryawanStatusDoc />} />
        <Route path='/karyawanRiwayat' element={<KaryawanRiwayatDoc />} />
        <Route path='/manajerDashboard' element={<ManajerDashboard />} />
        <Route path='/manajerDashboardPre' element={<ManajerDashboardPre />} />
        <Route path='/manajerPermintaan' element={<ManajerPermintaan />} />
        <Route path='/manajerRiwayat' element={<ManajerRiwayat />} />
        <Route path='/manajerTinjauDokumen' element={<MTinjauDokumen />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
