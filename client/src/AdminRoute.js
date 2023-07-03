import { Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Admin/AddEvents";
import AdminControl from "./Components/Admin/AdminControl";
import EditEvents from "./Components/Admin/EditEvents";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin/create" element={<AddEvents />} />
      <Route path="/admincontrol" element={<AdminControl />} />
      <Route path="/admincontrol/:slug" element={<EditEvents />} />
    </Routes>
  );
};

export default AdminRoute;
