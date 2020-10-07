import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      overflow: "hidden",
      position: "relative",
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
      minHeight: "100vh",
      maxWidth: "85%",
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(4),
    },
  })
);
export default useStyles;
