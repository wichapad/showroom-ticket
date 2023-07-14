import { getAdminId } from "./services/autherize";
import { useNavigate, Route, Routes } from "react-router-dom";
import AddEvents from "./Components/Admin/AddEvents";
import AdminControl from "./Components/Admin/AdminControl";
import EditEvents from "./Components/Admin/EditEvents";

const AdminRoute = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      {getAdminId() ? (
        <>
          <Route path="/create" element={<AddEvents />} />
          <Route path="/admincontrol" element={<AdminControl />} />
          <Route path="/admincontrol/:slug" element={<EditEvents />} />
        </>
      ) : (
        (() => {
          navigate("/");
          return null;
        })
      )}
    </Routes>
  );
};

export default AdminRoute;
