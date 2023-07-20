import { getAdminId } from "./services/autherize";
import { useNavigate, Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Dashboard/Admin/AddEvents";
import AdminControl from "./Components/Dashboard/Admin/AdminControl";
import EditEvents from "./Components/Dashboard/Admin/EditEvents";
import Dashboard from "./Components/Dashboard/Dashboard";

const AdminRoute = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      {getAdminId() ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<AddEvents />} />
          <Route path="/admincontrol" element={<AdminControl />} />
          <Route path="/admincontrol/:slug" element={<EditEvents />} />
        </>
      ) : (
        () => {
          navigate("/");
          return null;
        }
      )}
    </Routes>
  );
};

export default AdminRoute;
