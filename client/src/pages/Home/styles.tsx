import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contents: {
        maxWidth: '900px',
        width: '80%'
    },
    paper: {
      padding: theme.spacing(3)
    }
}));

export default useStyles;
