import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

import RouterApp from "./RouterApp";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faFileAlt,
  faFire,
  faMoneyBillAlt,
  faPhoneAlt,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { WhatsApp } from "@material-ui/icons";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    listSubheader: {
      textAlign: "start",
      marginLeft: "10px",
    },

    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img style={{marginLeft: '35px'}} src={window.location.origin + '/Nexfar.png'} alt="logo nexfar" height="40px"/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List subheader={<li />}>
            <ListItem button key="promocoes" component={Link} to="/">
              <ListItemIcon>
                <FontAwesomeIcon icon={faStore} />
              </ListItemIcon>
              <ListItemText primary={"FARMÁCIA DA ILHA"} secondary={"00.000.000/0000-00"}/>
            </ListItem>
            <li key={`section-compras`} className={classes.listSubheader}>
              <ul className={classes.ul}>
                <h4 className={classes.listSubheader}>COMPRAS</h4>
                <ListItem button key="promocoes" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faFire} />
                  </ListItemIcon>
                  <ListItemText primary={"Promoções"} />
                </ListItem>
                <ListItem button key="produtos" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faBox} />
                  </ListItemIcon>
                  <ListItemText primary={"Produtos"} />
                </ListItem>
                <ListItem button key="pedidos" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faFileAlt} />
                  </ListItemIcon>
                  <ListItemText primary={"Pedidos"} />
                </ListItem>
                <ListItem button key="cupons" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                  </ListItemIcon>
                  <ListItemText primary={"Cupons"} />
                </ListItem>
              </ul>
            </li>
            <li key={`section-admin`} className={classes.listSubheader}>
              <ul className={classes.ul}>
                <h4 className={classes.listSubheader}>ADMINISTRATIVO</h4>
                <ListItem button key="promocoes" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faStore} />
                  </ListItemIcon>
                  <ListItemText primary={"Estabelecimentos"} />
                </ListItem>
              </ul>
            </li>
            <li key={`section-ajuda`} className={classes.listSubheader}>
              <ul className={classes.ul}>
                <h4 className={classes.listSubheader}>AJUDA</h4>
                <ListItem button key="promocoes" component={Link} to="/">
                  <ListItemIcon>
                    <WhatsApp />
                  </ListItemIcon>
                  <ListItemText primary={"Whatsapp"} />
                </ListItem>
                <ListItem button key="promocoes" component={Link} to="/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </ListItemIcon>
                  <ListItemText primary={"Contato distribuidora"} />
                </ListItem>
              </ul>
            </li>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <RouterApp />
        <ToastContainer />
      </main>
    </div>
  );
}
