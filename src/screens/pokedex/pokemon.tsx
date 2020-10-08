import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { PokemonType } from "./types";

export const Pokemon = ({
  name,
  numberOfAbilities,
  baseExperience,
  imageUrl,
  stat
}: PokemonType) => {
  return (
    <Card style={{ margin: "20px 0px" }}>
      <CardContent>
        <img src={imageUrl} alt="PokemonSprite"></img>
        <Typography variant="h4">{name}</Typography>
        <Typography>Number of Abilities: {numberOfAbilities}</Typography>
        <Typography>Base Experience: {baseExperience}</Typography>
        <Typography>Stats: {stat}</Typography>
      </CardContent>
    </Card>
  );
};
