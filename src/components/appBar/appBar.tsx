import React, { useRef, useState } from "react";
import {
  Button,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Languages from "./components/languages/languages";
import useStyles from "./appBarStyles";
import { home } from "../../common/variables/routes";
import { useTranslation } from "react-i18next";

const AppBar = (): JSX.Element => {
  const classes = useStyles();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [t] = useTranslation("appBar");

  const handleToggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleCloseUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
      <Toolbar className={classes.toolbar}>

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
        </Popper>
        <Languages />
      </Toolbar>
  )
};

export default AppBar;
