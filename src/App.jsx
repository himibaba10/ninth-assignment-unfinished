import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { useEffect } from "react";

function App() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
