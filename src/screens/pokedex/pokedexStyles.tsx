import { makeStyles } from '@material-ui/core/styles';

const PokedexStyles = makeStyles({
    root: {
      minWidth: 25,
      mx: "auto"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pokemonName: {
      fontSize: 16,
      textAlign: 'center',
    },
    dexNumber: {
      marginBottom: 12,
      textAlign: 'center',
    },
    pokemonIcon: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        textAlign: 'center',
      },
  });

export default PokedexStyles;