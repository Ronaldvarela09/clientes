import React, {useState, useEffect} from 'react'
import ListCustomer from "../Components/ListCustomer"
import ModalEditCustomer from "../Components/ModalEditCustomer"
import {useDispatch, useSelector} from 'react-redux'
import {loadCustomers} from "../actions/customerAction";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom"

const ListCustomerPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector(store => store.customer.customers)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [customer, setCustomer] = useState("");

    const handleOpenModalEditCustomer = (identificacion) => {
        const dataCustomer = !!data && data.find((data) => data.identificacion === identificacion)
        setCustomer(dataCustomer)
        setOpenModalEdit(true)
    }

    const handleClose = () => {
        setOpenModalEdit(false)
    }

    const handleFormEditCustomer = (formCustomer) => {
        console.log(formCustomer)
        setOpenModalEdit(false)
    }

    const handleClickDetailsCustomer = (id) => {
        history.push(`/detalle-cliente/${id}/`)
    }

    useEffect(() => {
        dispatch(loadCustomers())
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Lista de clientes
                    </Typography>
                </Grid>
                <Grid item item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ListCustomer data={data} handleOpenModalEditCustomer={handleOpenModalEditCustomer} handleClickDetailsCustomer={handleClickDetailsCustomer}/>
                </Grid>
            </Grid>
            <ModalEditCustomer openModalEdit={openModalEdit} handleClose={handleClose} customer={customer}
                               handleFormEditCustomer={handleFormEditCustomer}/>
        </React.Fragment>
    )
}
export default ListCustomerPage
