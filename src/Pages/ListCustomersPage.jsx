import React, {useState, useEffect} from 'react'
import ListCustomer from "../Components/ListCustomer"
import ModalEditCustomer from "../Components/ModalEditCustomer"
import LoadingCustomer from "../Components/LoadingCustomer"
import MessageCustomer from "../Components/MessageCustomer"
import {useDispatch, useSelector} from 'react-redux'
import {loadCustomers} from "../actions/customerAction"
import Grid from '@material-ui/core/Grid'
import {useHistory} from "react-router-dom"


const ListCustomerPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector(store => store.customer.customers)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [customer, setCustomer] = useState("")
    const [loading, setLoading] = useState(true)

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
        setLoading(true)
        dispatch(loadCustomers())
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }, [dispatch])

    return (
        <React.Fragment>
            {loading ?
                (<LoadingCustomer/>)
                :
                (<Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        {data.length > 0 ?
                            (<ListCustomer data={data} handleOpenModalEditCustomer={handleOpenModalEditCustomer}
                                           handleClickDetailsCustomer={handleClickDetailsCustomer}/>)
                            :
                            (<MessageCustomer/>)
                        }

                    </Grid>
                </Grid>)
            }
            <ModalEditCustomer openModalEdit={openModalEdit} handleClose={handleClose} customer={customer}
                               handleFormEditCustomer={handleFormEditCustomer}/>
        </React.Fragment>
    )
}
export default ListCustomerPage
