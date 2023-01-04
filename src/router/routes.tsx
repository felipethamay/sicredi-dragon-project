import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsDragon from "../ui/pages/details-dragon/details-dragon";
import { Home } from "../ui/pages/home/home";
import Error from "../ui/pages/error/error";
import RegisterDragon from "../ui/pages/register-dragon/register-dragon";
import EditDragon from "../ui/pages/edit-dragon/edit-dragon";
import "react-toastify/dist/ReactToastify.css";
import Login from "../ui/pages/login/login";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<DetailsDragon />} />
        <Route path="/home/edit/:id" element={<EditDragon />} />
        <Route path="/register" element={<RegisterDragon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
