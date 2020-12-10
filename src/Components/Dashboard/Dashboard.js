import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PollIcon from "@material-ui/icons/Poll";
import AssignmentIcon from "@material-ui/icons/Assignment";
import User from "./userDetails.js";
import PhyAnalysis from "./physicsAnalysis.js";
import Solution from "./solution.js";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 240;
const font = "'Russo One', sans-serif";
const sidebarFont = "'Fjalla One', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  menuIcon: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      zIndex: "1000000000",
      //color: '#2F8D46',
      fontSize: "2em",
      top: "0.5em",
      left: "0.5em"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      width: `calc(100%)`,
      marginLeft: drawerWidth,
      backgroundColor: "#FFFFFF"
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#FFFFFF"
    },
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#FFFFFF"
    }
  },
  heading: {
    flex: "1",
    color: "#2F8D46",
    fontFamily: font,
    fontSize: "2em"
  },
  drawer: {
    [theme.breakpoints.down("sm")]: {
      //display: "none",
      width: drawerWidth,
      flexShrink: 0
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  Bigdrawer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: {
    //theme.mixins.toolbar,
    height: "150px"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  listitem: {
    fontFamily: sidebarFont,
    "&:hover": {
      backgroundColor: "#d1fbd6",
      color: "#000000"
    }
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [Component, SetComponent] = useState(0);
  const [MenuOpen, SetMenuOpen] = useState(0);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {MenuOpen ? (
        <CloseIcon
          style={{ color: "#FFFFFF" }}
          className={classes.menuIcon}
          onClick={() => SetMenuOpen(0)}
        />
      ) : (
        <MenuIcon
          style={{ color: "#2F8D46" }}
          className={classes.menuIcon}
          onClick={() => SetMenuOpen(1)}
        />
      )}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.heading}>
            Physics En Total
          </Typography>
        </Toolbar>
      </AppBar>
      {MenuOpen ? (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar}>
            <User />
          </div>
          <Divider />
          <List>
            <ListItem
              className={classes.listitem}
              onClick={() => SetComponent(0)}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              JEE 2020 Solution
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              className={classes.listitem}
              onClick={() => SetComponent(1)}
            >
              <ListItemIcon>
                <PollIcon />
              </ListItemIcon>
              JEE 2020 Analysis
            </ListItem>
          </List>
        </Drawer>
      ) : (
        <Drawer
          className={classes.Bigdrawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar}>
            <User />
          </div>
          <Divider />
          <List>
            <ListItem
              className={classes.listitem}
              onClick={() => SetComponent(0)}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              JEE 2020 Solution
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              className={classes.listitem}
              onClick={() => SetComponent(1)}
            >
              <ListItemIcon>
                <PollIcon />
              </ListItemIcon>
              JEE 2020 Analysis
            </ListItem>
          </List>
        </Drawer>
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {Component ? <PhyAnalysis /> : <Solution />}
      </main>
    </div>
  );
}
