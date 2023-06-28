import { Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Admin/AddEvents";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AddEvents />} />
    </Routes>
  );
};

export default AdminRoute;
