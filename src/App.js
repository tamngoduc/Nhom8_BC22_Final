import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MainTemplate from "./template/MainTemplate/MainTemplate";
import Home from "./pages/Home/Home";
import theme from "./themes/appThemeProvider";
import RoomsList from "./pages/RoomsList/RoomsList";
import RoomBooking from "./pages/RoomBooking/RoomBooking";
import SignInSide from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="rooms/:locationId" element={<RoomsList />} />
            <Route path="booking/:roomId" element={<RoomBooking />} />
          </Route>
          <Route path="/sign-in" element={<SignInSide />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
