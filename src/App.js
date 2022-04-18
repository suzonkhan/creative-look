import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Registration from "./Pages/Registration/Registration";
import RequireAuth from "./RequireAuth/RequireAuth";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
