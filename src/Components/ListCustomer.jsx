import React from 'react'
import {withStyles, Theme, createStyles, makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import IconButton from '@material-ui/core/IconButton'
import Create from '@material-ui/icons/Create'
import OpenInNew from '@material-ui/icons/OpenInNew'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        minWidth: 700,
    },
    buttonEdit: {
        marginLeft: 5
    },
    buttonDetail: {
        marginLeft: 5
    }
}));

function ListCustomer({data, handleOpenModalEditCustomer, handleClickDetailsCustomer}) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Lista de clientes
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Identificación</StyledTableCell>
                                    <StyledTableCell align="center">Nombre</StyledTableCell>
                                    <StyledTableCell align="center">Edad</StyledTableCell>
                                    <StyledTableCell align="center">Fecha de nacimiento</StyledTableCell>
                                    <StyledTableCell align="center">Opciones</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((data) => (
                                    <StyledTableRow key={data.identificacion}>
                                        <StyledTableCell component="th" scope="row">
                                            {data.identificacion}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{data.nombre}</StyledTableCell>
                                        <StyledTableCell align="center">{data.edad}</StyledTableCell>
                                        <StyledTableCell
                                            align="center">{moment(data.fechaNacimiento).locale('es')
                                            .format('D/M/Y')}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Tooltip title="Ver detalle">
                                                <IconButton
                                                    onClick={() => handleClickDetailsCustomer(data.identificacion)}
                                                    color="primary" aria-label="upload picture" component="span">
                                                    <OpenInNew/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Editar">
                                                <IconButton color="primary" aria-label="upload picture" component="span"
                                                            onClick={() => handleOpenModalEditCustomer(data.identificacion)}>
                                                    <Create/>
                                                </IconButton>
                                            </Tooltip>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ListCustomer;
