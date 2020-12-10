import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const font2 = "'Pacifico', cursive";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#2F8D46",
    height: "100%"
  },
  parent: {
    marginTop: "8%",
    position: "relative"
    //top: "50%"
    //left: "25%"
  },
  icon: {
    height: "80px",
    width: "80px"
  },
  username: {
    marginTop: "2%",
    fontFamily: font2,
    fontSize: "1.5em",
    color: "#FFFFFF"
  }
}));

export default function BadgeAvatars() {
  const classes = useStyles();
  const [name,setname] = useState(localStorage.getItem("name"));
  const [image,setimage] = useState(localStorage.getItem("image"));
  
  return (
    <div className={classes.root}>
      <StyledBadge
        className={classes.parent}
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        variant="dot"
      >
        <Avatar className={classes.icon} alt="Remy Sharp" src={image} />
      </StyledBadge>
      <Typography variant="h6" gutterBottom className={classes.username}>
        {name}
      </Typography>
    </div>
  );
}
