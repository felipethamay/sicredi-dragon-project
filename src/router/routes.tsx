import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import DetailsDragon from '../ui/pages/details-dragon/details-dragon';
import { Home } from '../ui/pages/home/home';
import SicrediHeader from '../ui/components/sicredi-header/sicredi-header.component';
import Error from '../ui/pages/error/error';
import RegisterDragon from '../ui/pages/register-dragon/register-dragon';
import EditDragon from '../ui/pages/edit-dragon/edit-dragon';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../ui/pages/login/login';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      <Login />
      <SicrediHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<DetailsDragon />} />
        <Route path='/register' element={<RegisterDragon />} />
        <Route path='/edit/:id' element={<EditDragon />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}