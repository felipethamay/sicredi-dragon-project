import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import DetailsDragon from '../ui/screens/details-dragon/details-dragon';
import { Home } from '../ui/screens/home/home';
import SicrediHeader from '../ui/components/sicredi-header/sicredi-header.component';
import Error from '../ui/screens/error/error';
import RegisterDragon from '../ui/screens/register-dragon/register-dragon';
import EditDragon from '../ui/screens/edit-dragon/edit-dragon';
import 'react-toastify/dist/ReactToastify.css';

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