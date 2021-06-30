import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import moment from "moment"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
        actionsModal: {
            justifyContent: 'center'
        },
        buttonSave: {
            backgroundColor: '#2196f3'
        }
    })
);

function ModalEditCustomer({openModalEdit, handleClose, customer, handleFormEditCustomer}) {
    const classes = useStyles()
    const [formCustomer, setFormCustomer] = useState({
        identificacion: '',
        nombre: '',
        edad: '',
        fechaNacimiento: ''
    })

    useEffect(() => {
        if (!!customer) {
            setFormCustomer({
                ...formCustomer,
                identificacion: !!customer.identificacion ? customer.identificacion : '',
                nombre: !!customer.nombre ? customer.nombre : '',
                edad: !!customer.edad ? customer.edad : '',
                fechaNacimiento: !!customer.fechaNacimiento ?
                    moment(customer.fechaNacimiento).locale('es').format('YYYY-MM-DD') : ''
            })
        }
    }, [customer])

    const handleChange = (event) => {
        setFormCustomer({
            ...formCustomer,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <Dialog
                open={openModalEdit}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >

                <DialogTitle id="customized-dialog-title" className={classes.header}>
                    <div>
                        <Typography variant="h6" gutterBottom align="center">Editar información del cliente</Typography>
                    </div>
                </DialogTitle>
                <DialogContent dividers>

                    <Grid container spacing={1} alignContent="center">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                id="identificacion" name="identificacion" variant="outlined" fullWidth margin="dense"
                                label="Identificación" onChange={handleChange} value={formCustomer.identificacion}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                id="nombre" name="nombre" variant="outlined" fullWidth margin="dense" label="Nombre"
                                onChange={handleChange} value={formCustomer.nombre}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                id="edad" name="edad" variant="outlined" fullWidth margin="dense" label="Edad"
                                onChange={handleChange} value={formCustomer.edad}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                id="fechaNacimiento" name="fechaNacimiento" label="Fecha nacimiento" type="date"
                                onChange={handleChange} variant="outlined" fullWidth margin="dense"
                                value={formCustomer.fechaNacimiento} className={classes.textField}
                                InputLabelProps={{shrink: true}}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.actionsModal}>
                    <Button variant="contained" onClick={() => handleFormEditCustomer(formCustomer)} color="primary">
                        Guardar
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        Cancelar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default ModalEditCustomer
