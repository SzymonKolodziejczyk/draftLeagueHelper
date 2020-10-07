import React, { useState } from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
} from "@material-ui/icons";
import useStyles from "./sideBarStyles";
import { useTranslation } from "react-i18next";
import {
  home,
} from "../../common/variables/routes";

const SideBar = (): JSX.Element => {
  const classes = useStyles();
  const [t] = useTranslation("sideBar");
  const [expand, setExpand] = useState(0);

  return (
    <>
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
        <Divider />
    </>
  );
};

export default SideBar;
