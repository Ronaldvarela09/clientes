import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import moment from "moment";

function DetailCustomer({data}) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography variant="body1" gutterBottom>
                    <strong>Identificación:</strong> {data.identificacion}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography variant="body1" gutterBottom>
                    <strong>Nombre:</strong> {data.nombre}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography variant="body1" gutterBottom>
                    <strong>Edad:</strong> {data.edad}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography variant="body1" gutterBottom>
                    <strong>Fecha de nacimiento:</strong> {moment(data.fechaNacimiento).locale('es').format('D/M/Y')}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default DetailCustomer;
