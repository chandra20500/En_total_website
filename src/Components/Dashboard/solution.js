import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  roots: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      height: "85vh",
      overflowX: "hidden",
      scrollbarWidth: "none"
    },
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      height: "85vh",
      overflowX: "hidden",
      scrollbarWidth: "none"
    },
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
      width: "100%",
      height: "100vh",
      overflowX: "hidden",
      scrollbarWidth: "none"
    }
  },
  card_root: {
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "50%",
      paddingTop: "2%",
      paddingBottom: "2%",
      paddingLeft: "1%",
      backgroundColor: "transparent",
      boxShadow: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      height: "50%",
      paddingTop: "2%",
      paddingBottom: "2%",
      paddingLeft: "1%",
      backgroundColor: "transparent",
      boxShadow: "none"
    }
  },
  media: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: "80%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
      height: "80%"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    //flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.roots}>
      <Card className={classes.card_root}>
        <CardMedia
          className={classes.media}
          component="iframe"
          title="test"
          width="140px"
          src="https://www.youtube.com/embed/ORFLCYV63CE"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            {/*<div style={{ display: "flex" }}>
              <Typography
                component="h5"
                variant="h5"
                style={{ position: "relative", flex: "1" }}
              >
                Chapter 1- Units & Measurement
              </Typography>
            </div>*/}
            <Typography align="left" variant="subtitle1" color="textSecondary">
              A large square container with thin transparent vertical walls and
              filled with water (refractive index 4 3 ) is kept on a horizontal
              table. A student holds a thin straight wire vertically inside the
              water 12 cm from one of its corners, as shown schematically in the
              figure. Looking at the wire from this corner, another student sees
              two images of the wire, located symmetrically on each side of the
              line of sight as shown. The separation (in cm) between these
              images is A train with cross-sectional area St is moving with
              speed vt inside a long tunnel of cross-sectional area S0 (S0 =
              4St). Assume that almost all the air (density ) in front of the
              train flows back between its sides and the walls of the tunnel.
              Also, the air flow with respect to the train is steady and
              laminar. Take the ambient pressure and that inside the train to be
              p0. If the pressure in the region between the sides of the train
              and the tunnel walls is p, then p0 − p = 7 2N ρvt 2 . The value of
              N is
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.card_root}>
        <CardMedia
          className={classes.media}
          component="iframe"
          title="test"
          width="140px"
          src="https://www.youtube.com/embed/ORFLCYV63CE"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            {/*<div style={{ display: "flex" }}>
              <Typography
                component="h5"
                variant="h5"
                style={{ position: "relative", flex: "1" }}
              >
                Chapter 1- Units & Measurement
              </Typography>
            </div>*/}
            <Typography align="left" variant="subtitle1" color="textSecondary">
              A train with cross-sectional area St is moving with speed vt
              inside a long tunnel of cross-sectional area S0 (S0 = 4St). Assume
              that almost all the air (density ) in front of the train flows
              back between its sides and the walls of the tunnel. Also, the air
              flow with respect to the train is steady and laminar. Take the
              ambient pressure and that inside the train to be p0. If the
              pressure in the region between the sides of the train and the
              tunnel walls is p, then p0 − p = 7 2N ρvt 2 . The value of N is
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
