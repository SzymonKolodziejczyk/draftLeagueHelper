import React from 'react';
import { 
  Card,
  CardMedia, 
  Grid
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PokedexStyles from "./pokedexStyles";
import everyPokemon from "./pokemonDatabase/pokedexData";

export default function SimpleCard() {
  const classes = PokedexStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
      <Grid item xs={1}>
      <CardMedia
        className={classes.sprite}
        image={everyPokemon.bulbasaur.pokemonIcon}
        title="Paella dish"
      />
        <Typography className={classes.indexNumber} color="textSecondary" gutterBottom>
          {everyPokemon.bulbasaur.indexNumber}
        </Typography>
        <Typography className={classes.pokemonName} color="textSecondary">
          {everyPokemon.bulbasaur.pokemonName}
        </Typography>
      </Grid>
      
      
      
      <Grid item xs={1}>
      <CardMedia
        className={classes.sprite}
        image={everyPokemon.ivysaur.pokemonIcon}
        title="Paella dish"
      />
        <Typography className={classes.indexNumber} color="textSecondary" gutterBottom>
          {everyPokemon.ivysaur.indexNumber}
        </Typography>
        <Typography className={classes.pokemonName} color="textSecondary">
          {everyPokemon.ivysaur.pokemonName}
        </Typography>
      </Grid>
      
      

      </Grid>
    </Card>
  );
}