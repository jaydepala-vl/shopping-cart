import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import purple from '@material-ui/core/colors/purple';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import Switch from '@material-ui/core/Switch';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

// API
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_INFO, CHANGE_THEME } from '../services/api.service';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  themeMenuContainer: {
    'display': 'flex',
    // 'pointer-events': 'none'
  },
  themeMenuText: {
    top: theme.spacing(1),
    position: 'relative'
  },
  shoppingCartIconContainer: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [moreOptionsEl, setMoreOptionsEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMoreOptions = Boolean(moreOptionsEl);
  const [theme, setTheme] = useState('light');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreMenu = (event) => {
    setMoreOptionsEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMoreOptionsClose = () => {
    setMoreOptionsEl(null);
  };

  const handleThemeChange = (event) => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    dispatch(CHANGE_THEME(theme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    dispatch(GET_USER_INFO());
  }, []);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        {props.user.user && props.user.user !== null && (
          <div>
            <IconButton
              className={classes.shoppingCartIconContainer}
              aria-label="shopping cart of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate("/cart", { replace: true })}
              color="inherit">
                <Badge badgeContent={cart && cart.list.length} color="primary" overlap="rectangular">
                  <ShoppingCart />
                </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
        <IconButton
          aria-label="More Option"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMoreMenu}
          color="inherit">
          <MoreHoriz />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={moreOptionsEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMoreOptions}
          onClose={handleMoreOptionsClose}
        >
          <MenuItem disableRipple={true}>
            <div className={classes.themeMenuContainer}>
              <Typography className={classes.themeMenuText}>
                Dark Theme
              </Typography>
              <Switch
                checked={theme === 'dark'}
                onChange={handleThemeChange}
                name="theme"
                inputProps={{ 'aria-label': 'theme checkbox' }}
              />
            </div>
          </MenuItem>
          <MenuItem onClick={handleMoreOptionsClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => ({ user: state.user, theme: state.theme });
export default connect(mapStateToProps, { GET_USER_INFO, CHANGE_THEME })(Header)
// export default Header;
