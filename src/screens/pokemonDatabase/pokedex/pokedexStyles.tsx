import { fade, makeStyles } from '@material-ui/core/styles';

const PokedexStyles = makeStyles((theme) => ({
    root: { 
      display: "flex",
      minHeight: "16vh",
      height: "100%",
      maxHeight: "100%",
      minWidth: "16vh",
      width: "100%",
      maxWidth: "100%",
      paddingLeft: "25px",
      paddingRight: "25px",
      marginTop: "3px",
      margin: "0 auto",
      marginBottom: "3px",
      alignItems: "center",
      justify: "center",
      flexWrap: 'wrap'
    },
    roots: {
      paddingLeft: "3px",
      paddingRight: "3px",
      marginTop: "3px"
    },
    textStyle: {
      fontSize: 14,
      margin: "center",
      textAlign: 'center'
    },
    sprite: {
      width: "80px",
      height: "80px",
      margin: 'center',
      alignItems: "center"
      },
    searchContainer: {
      display: "flex",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "5px",
      marginBottom: "5px",
    },
    searchIcon: {
      alignSelf: "flex-end",
      marginBottom: "5px",
    },
    searchInput: {
      width: "200px",
      margin: "5px",
    },
  }));

export default PokedexStyles;