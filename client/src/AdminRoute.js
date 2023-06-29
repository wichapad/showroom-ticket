import { Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Admin/AddEvents";
import AdminControl from "./Components/Admin/AdminControl";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AddEvents />} />
      <Route path="/adminControl" element={<AdminControl />} />
    </Routes>
  );
};

export default AdminRoute;
