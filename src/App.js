import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Link
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  center: {
    margin: theme.spacing(1) + "px auto",
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  typoContainer: {
    // "& > * + *": {
    //   marginLeft: theme.spacing(2),
    // },
    background: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.background.paper,
  },
  typo: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    border: "1px solid " + theme.palette.grey.A100,
    textDecoration: "none",
  },
}));

const App = (props) => {
  // const [count, setCount] = useState(state.count);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const currentTheme = useSelector((state) => state.theme);
  const navigate = useNavigate();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const lightTheme = React.useMemo(() =>
    createTheme({
      palette: {
        type: "light",
      },
    })
  );
  const darkTheme = React.useMemo(() =>
    createTheme({
      palette: {
        type: "dark",
      },
    })
  );
  const changeTheme = (theme) => {
    setTheme(theme === "light" ? lightTheme : darkTheme);
  };
  const [theme, setTheme] = useState(
    currentTheme.theme === "light" ? lightTheme : darkTheme
  );
  const changeTab = (tab) => {
    switch (tab) {
      case 0:
        navigate("/", { replace: true });
        break;
      case 1:
        navigate("/about-us", { replace: true });
        break;
      case 2:
        navigate("/contact-us", { replace: true });
        break;
      case 3:
        navigate("/counter", { replace: true });
        break;
      default:
        navigate("/", { replace: true });
        break;
    }
    setTab(tab);
  };

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
