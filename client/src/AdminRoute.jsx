import { getAdminId } from "./services/autherize";
import { useNavigate, Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Dashboard/Main/Content/Events/AddEvents";
import Dashboard from "./Components/Dashboard/Main/Content/DashboardCompo/Dashboard";
import AllEvents from "./Components/Dashboard/Main/Content/Events/AllEvents";
import { ApiProvider } from "./Components/UseContext/ApiContext";

const AdminRoute = () => {
  const navigate = useNavigate();
  return (
    <ApiProvider>
      <Routes>
        {getAdminId() ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* events */}
            {/* <Route path="/create" element={<AddEvents />} /> */}
            <Route path="/dashboard/events" element={<AllEvents />} />
          </>
        ) : (
          () => {
            navigate("/");
            return null;
          }
        )}
      </Routes>
    </ApiProvider>
  );
};

export default AdminRoute;
