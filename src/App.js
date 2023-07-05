import Navbar from "./pages/navbar_page/navbar";
import Footer from "./pages/footer_page/footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
