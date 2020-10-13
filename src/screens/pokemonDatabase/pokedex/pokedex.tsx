import React, { useState } from 'react';
import { 
  Card,
  CardMedia,
  GridList,
  Grid,
  TextField,
  Toolbar
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import PokedexStyles from "./pokedexStyles";
import everyPokemon from "./pokedexData";

export default function SimpleCard() {
  const classes = PokedexStyles();
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setFilter(e.target.value);
  }

  return (
    <>
    <Toolbar>
      <div className={classes.searchContainer}>
        <SearchIcon className={classes.searchIcon}/>
        <TextField 
        onChange={handleSearchChange}
        placeholder="Search"
        className={classes.searchInput}
        label="Pokemon"
        variant="standard"
        />
      </div>
    </Toolbar>
    <GridList className={classes.roots} cellHeight={200} cols={10}>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.bulbasaur.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.bulbasaur.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.bulbasaur.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.bulbasaur.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.ivysaur.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.ivysaur.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.ivysaur.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.ivysaur.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.venusaur.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.venusaur.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.venusaur.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.venusaur.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.sandshrew.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.sandshrew.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.sandshrew.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.sandshrew.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.sandslash.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.sandslash.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.sandslash.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.sandslash.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <CardMedia
              className={classes.sprite}
              image={everyPokemon.nidoqueen.pokemonIcon}
              title="Click for more information" />
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.nidoqueen.indexNumber}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary">
              {everyPokemon.nidoqueen.pokemonName}
            </Typography>
            <Typography className={classes.textStyle} color="textSecondary" gutterBottom>
              {everyPokemon.nidoqueen.pokemonType}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </GridList></>
  );
}