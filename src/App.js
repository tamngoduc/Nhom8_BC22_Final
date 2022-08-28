import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainTemplate from "./template/MainTemplate/MainTemplate";
import Home from "./pages/Home/Home";
import theme from "./themes/appThemeProvider";
import RoomsList from "./pages/RoomsList/RoomsList";
import RoomBooking from "./pages/RoomBooking/RoomBooking";
import AuthTemplate from "./template/AuthTemplate/AuthTemplate";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import UserProfile from "./pages/UserProfile/UserProfile";
import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import UsersManagement from "./pages/UserManangement/UserManagement";
import LocationsManagement from "./pages/LocationsManagement/LocationsManagement";
import RoomsManagement from "./pages/RoomsManagement/RoomsManagement";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="rooms/:locationId" element={<RoomsList />} />
            <Route path="booking/:roomId" element={<RoomBooking />} />
            <Route path="account" element={<UserProfile />} />
          </Route>

          <Route element={<AuthTemplate />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>

          <Route path="/admin" element={<AdminTemplate />}>
            <Route path="users" element={<UsersManagement />} />
            <Route path="rooms" element={<RoomsManagement />} />
            <Route path="locations" element={<LocationsManagement />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
