import React from 'react';
import { 
  Card,
  CardMedia, 
  Grid
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PokedexStyles from "./pokedexStyles";

export default function SimpleCard() {
  const classes = PokedexStyles();

  const getPokemonCard = () => {
    return (
    <Grid item xs={1}>
      <CardMedia
        className={classes.pokemonIcon}
        image="https://img.pokemondb.net/sprites/sword-shield/icon/bulbasaur.png"
        title="Paella dish"
      />
        <Typography className={classes.dexNumber} color="textSecondary" gutterBottom>
          001
        </Typography>
        <Typography className={classes.pokemonName} color="textSecondary">
          Bulbasaur
        </Typography>
      </Grid>
    );
    };

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
      {getPokemonCard()}
      {getPokemonCard()}
      </Grid>
    </Card>
  );
}