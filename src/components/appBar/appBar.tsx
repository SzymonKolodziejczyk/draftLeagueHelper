import React, { useRef, useState } from "react";
import {
  AppBar as MuiAppBar,
  Button,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Languages from "./components/languages/languages";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useDispatch, useSelector } from "react-redux";
import {
  authUserSelector,
  userNameSelector,
} from "../../store/selectors/authSelector";
import useStyles from "./appBarStyles";
import clsx from "clsx";
import { IThunkDispatch } from "../../store/models/IThunkDispatch";
import toggleDrawerAction from "../../store/actions/toggleDrawerAction";
import { home, pokedex } from "../../common/variables/routes";
import { useTranslation } from "react-i18next";
import { drawerIsOpenedSelector } from "../../store/selectors/drawerSelector";

const AppBar = (): JSX.Element => {
  const isAuthUser = useSelector(authUserSelector);
  const user = useSelector(userNameSelector);
  const drawerIsOpen = useSelector(drawerIsOpenedSelector);
  const classes = useStyles();
  const dispatch = useDispatch<IThunkDispatch>();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [t] = useTranslation("appBar");

  const handleToggleDrawer = () => {
    dispatch(toggleDrawerAction());
  };

  const handleToggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleCloseUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <MuiAppBar
      position="absolute"
      className={clsx(
        classes.appBar,
        isAuthUser && drawerIsOpen && classes.appBarShift
      )}
    >
      <Toolbar className={classes.toolbar}>
        {isAuthUser && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            className={clsx(
              classes.menuButton,
              drawerIsOpen && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
          align="center"
        >
          <Link to={home} className={classes.titleLink}>
            {t("title")}
          </Link>
        </Typography>
        <Button
          ref={anchorRef}
          aria-controls={userMenuOpen ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleToggleUserMenu}
        >
          <ArrowDropDownIcon />
        </Button>
        <Popper
          open={userMenuOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseUserMenu}>
                  <MenuList autoFocusItem={userMenuOpen} id="menu-list-grow">
                        <Link to={home} className={classes.link}>
                          <MenuItem
                            onClick={handleCloseUserMenu}
                            className={classes.link}
                          >
                            {t("changePassword")}
                          </MenuItem>
                        </Link>
                        <Link
                          to={pokedex}
                          className={classes.link}
                          onClick={handleCloseUserMenu}
                          color="inherit"
                        >
                        </Link>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Languages />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
