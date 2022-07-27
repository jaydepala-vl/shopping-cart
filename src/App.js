import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Link
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// Components
import Header from "./components/header";
import TopHeader from "./components/top-header";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import CounterComponent from "./pages/counter";
import Cart from "./pages/cart";

// API
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const App = (props) => {
  const currentTheme = useSelector((state) => state.theme);
  const lightTheme = React.useMemo(() =>
    createTheme({
      palette: {
        type: "light",
      },
  }), []);
  const darkTheme = React.useMemo(() =>
    createTheme({
      palette: {
        type: "dark",
      },
  }), []);
  const changeTheme = (theme) => {
    setTheme(theme === "light" ? lightTheme : darkTheme);
  };
  const [theme, setTheme] = useState(
    currentTheme.theme === "light" ? lightTheme : darkTheme
  );

  useEffect(() => {
    changeTheme(currentTheme.theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="counter" element={<CounterComponent />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({ count: state.count });
export default connect(mapStateToProps)(App);
