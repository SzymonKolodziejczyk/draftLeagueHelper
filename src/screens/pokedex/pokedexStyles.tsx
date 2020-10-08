import { makeStyles } from '@material-ui/core/styles';

const PokedexStyles = makeStyles({
    root: {
      minWidth: 25,
      mx: "auto"
    },
    pokemonName: {
      fontSize: 14,
      textAlign: 'center',
    },
    indexNumber: {
      marginBottom: 12,
      textAlign: 'center',
    },
    sprite: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        textAlign: 'center',
      },
  });

export default PokedexStyles;