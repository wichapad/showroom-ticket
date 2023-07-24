import { getAdminId } from "./services/autherize";
import { useNavigate, Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Dashboard/Events/AddEvents";
import EditEvents from "./Components/Dashboard/Events/EditEvents";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllEvents from "./Components/Dashboard/Events/AllEvents";

const AdminRoute = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      {getAdminId() ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* events */}
          <Route path="/create" element={<AddEvents />} />
          <Route path="/allevents" element={<AllEvents />} />
          <Route path="/allevents/:slug" element={<EditEvents />} />
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
