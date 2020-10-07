import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

const Pokedex = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    this is item 1
                </Grid>
                <Grid item xs={2}>
                    this is item 2
                </Grid>
            </Grid>
        </>
    );
};

export default Pokedex;