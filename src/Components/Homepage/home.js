import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AppsIcon from "@material-ui/icons/Apps";

const font = "'Russo One', sans-serif";
const sidebarFont = "'Open Sans', sans-serif;";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#ffffff"
  },
  topbar: {
    backgroundColor: "#ffffff"
  },
  menuButton: {
    [theme.breakpoints.down("sm")]: {
      //display: "none",
      color: "#2F8D46",
      position: "absolute",
      zIndex: "100",
      top: "0.2em",
      left: "0.5em",
      fontSize: "2em"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      fontFamily: font,
      position: "relative",
      left: "50%",
      textAlign: "center",
      transform: "translateX(-50%)",
      fontSize: "2em",
      color: "#2F8D46"
    },
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      fontFamily: font,
      position: "relative",
      left: "10%",
      fontSize: "2em",
      color: "#2F8D46"
    },
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
      fontFamily: font,
      position: "relative",
      left: "10%",
      fontSize: "2em",
      color: "#2F8D46"
    }
  },
  navigation: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      fontFamily: sidebarFont,
      color: "#000000"
    },
    [theme.breakpoints.up("md")]: {
      fontFamily: sidebarFont,
      position: "relative",
      right: "10%",
      color: "#000000"
    },
    [theme.breakpoints.up("lg")]: {
      fontFamily: sidebarFont,
      position: "relative",
      right: "10%",
      color: "#000000"
    }
  }
}));

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <div>
          <MenuIcon onClick={handleClick} />
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <AppsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <AccountBalanceIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Admission" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <VideoLibraryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ContactMailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
        {/*{Menu ? (
          <MenuIcon onClick={() => SetMenu(0)} />
        ) : (
          <CloseIcon onClick={() => SetMenu(1)} />
        )}*/}
      </IconButton>
      <AppBar position="static">
        <Toolbar className={classes.topbar}>
          <Typography variant="h6" className={classes.title}>
            Physics EN Total
          </Typography>
          <div className={classes.navigation}>
            <Button style={{ fontWeight: 600 }} color="inherit">
              Videos
            </Button>
            <Button style={{ fontWeight: 600 }} color="inherit">
              Admission
            </Button>
            <Button style={{ fontWeight: 600 }} color="inherit">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
