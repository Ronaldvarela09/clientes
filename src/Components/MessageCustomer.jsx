import React from "react"
import Grid from "@material-ui/core/Grid";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            fontSize: 250
        }
    })
);

function MessageCustomer() {
    const classes = useStyles();

    return (
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <SentimentVeryDissatisfiedIcon className={classes.icon}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h6" gutterBottom align="center">No hay clientes
                    registrados</Typography>
            </Grid>
        </Grid>
    )
}

export default MessageCustomer
