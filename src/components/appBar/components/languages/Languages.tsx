import React, { useState } from "react";
import {
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const Languages = () => {
  const i18next = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleCloseClick = (
    language: string,
    event: React.MouseEvent<EventTarget>
  ) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    switch (language) {
      case "en-US":
        i18next[1].changeLanguage("en-US");
        break;
      case "pl-PL":
        i18next[1].changeLanguage("pl-PL");
        break;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap">
      <Box>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleOpen}
        >
          {i18next[1].language === "en-US" ? (
            <span>
              <ReactCountryFlag
                countryCode="gb"
                style={{
                  width: "2em",
                  height: "2em",
                }}
                svg
              />
            </span>
          ) : (
            <span>
              <ReactCountryFlag
                countryCode="pl"
                style={{
                  width: "2em",
                  height: "2em",
                }}
                svg
              />
            </span>
          )}
        </Button>
      </Box>
      <Box>
        <Popper
          open={open}
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
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={(event: React.MouseEvent<EventTarget>) =>
                        handleCloseClick("en-US", event)
                      }
                    >
                      <ListItemIcon>
                        <ReactCountryFlag
                          countryCode="gb"
                          style={{
                            width: "2em",
                            height: "2em",
                          }}
                          svg
                        />
                      </ListItemIcon>
                      <ListItemText primary="EN" />
                    </MenuItem>
                    <MenuItem
                      onClick={(event: React.MouseEvent<EventTarget>) =>
                        handleCloseClick("pl-PL", event)
                      }
                    >
                      <ListItemIcon>
                        <ReactCountryFlag
                          countryCode="pl"
                          style={{
                            width: "2em",
                            height: "2em",
                          }}
                          svg
                        />
                      </ListItemIcon>
                      <ListItemText primary="PL" />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Box>
  );
};
export default Languages;
