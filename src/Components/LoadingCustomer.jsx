import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import React from "react"

function LoadingCustomer() {
    return (
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <CircularProgress color="secondary"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h6" gutterBottom align="center">
                    Cargando...
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LoadingCustomer
