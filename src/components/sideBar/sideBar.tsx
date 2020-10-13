import React, { useState } from "react";
import clsx from "clsx";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  AddRounded as AddRoundedIcon,
  ListRounded as ListRoundedIcon,
} from "@material-ui/icons";
import useStyles, { drawerWidth } from "./sideBarStyles";
import { useTranslation } from "react-i18next";
import {
  home,
  pokedex,
  pokemonabilities,
  pokemonitems,
  pokemonmoves,
  pokemonnatures,
  typecharts,
} from "../../common/variables/routes";
import { useDispatch, useSelector } from "react-redux";
import { IThunkDispatch } from "../../store/models/IThunkDispatch";
import setDrawerAction from "../../store/actions/setDrawerAction";
import { drawerIsOpenedSelector } from "../../store/selectors/drawerSelector";

const SideBar = (): JSX.Element => {
  const classes = useStyles();
  const [t] = useTranslation("sideBar");
  const dispatch = useDispatch<IThunkDispatch>();
  const isOpened = useSelector(drawerIsOpenedSelector);
  const [expand, setExpand] = useState(0);

  const handleDrawerClose = () => {
    dispatch(setDrawerAction(false));
  };

  const handleExpand = (index: number) => {
    if (expand === index) {
      setExpand(0);
    } else {
      setExpand(index);
    }
  };

  return (
    <>
    <div
      style={{
        minWidth: isOpened ? drawerWidth : 55,
      }}
      className={classes.drawerDummy}
    />
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !isOpened && classes.drawerPaperClose
        ),
      }}
      open={isOpened}
    >
    <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon color="primary" />
          </IconButton>
        </div>
        <Divider />
        <ListItem button onClick={() => handleExpand(1)}>
          <Tooltip title={t("dashboard") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("dashboard")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider/>
        <ListItem button onClick={() => handleExpand(2)}>
          <Tooltip title={t("dashboard") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("dashboard")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider/>
        <ListItem button onClick={() => handleExpand(3)}>
          <Tooltip title={t("dashboard") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("dashboard")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <ListRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider/>
        <ListItem button onClick={() => handleExpand(4)}>
          <Tooltip title={t("dashboard") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("dashboard")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <ListRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider/>
        <ListItem button onClick={() => handleExpand(5)}>
          <Tooltip title={t("pokemonDatabase") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("pokemonDatabase")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <ListRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
            <Link to={pokedex} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Pokedex") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Pokedex")}
              </ListItem>
            </Link>
            <Link to={typecharts} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Type Charts") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Type Charts")}
              </ListItem>
            </Link>
            <Link to={pokemonabilities} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Abilities") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Abilities")}
              </ListItem>
            </Link>
            <Link to={pokemonmoves} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Moves") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Moves")}
              </ListItem>
            </Link>
            <Link to={pokemonitems} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Items") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Items")}
              </ListItem>
            </Link>
            <Link to={pokemonnatures} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("Natures") || ""} placement="right">
                  <ListItemIcon>
                    <AddRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("Natures")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider/>
        <ListItem button onClick={() => handleExpand(6)}>
          <Tooltip title={t("dashboard") || ""} placement="right">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
          </Tooltip>
          <ListItemText> {t("dashboard")} </ListItemText>
        </ListItem>
        <Collapse in={expand === 6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={home} className={classes.buttonLink}>
              <ListItem button>
                <Tooltip title={t("mainPage") || ""} placement="right">
                  <ListItemIcon>
                    <ListRoundedIcon />
                  </ListItemIcon>
                </Tooltip>
                {t("mainPage")}
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider />
      </Drawer>
    </>
  );
};

export default SideBar;
