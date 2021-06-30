import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import DetailCustomer from "../Components/DetailCustomer"
import {useDispatch, useSelector} from "react-redux"
import {loadCustomers} from "../actions/customerAction"
import Typography from '@material-ui/core/Typography'
import {useHistory, useParams} from "react-router-dom"
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            marginBottom: '15px'
        }
    })
);

const DetailCustomerPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch()
    const data = useSelector(store => store.customer.customers)

    const {id} = useParams()
    const [dataCustomer, setDataCustomer] = useState("")
    const history = useHistory()

    const handleRedirecListCustomer = () => {
        history.push("/")
    }

    useEffect(() => {
        if (data.length > 0 && !!id) {
            const customer = data.find((customers) => customers.identificacion === id)
            setDataCustomer(customer)
        }
    }, [data, id])

    useEffect(() => {
        dispatch(loadCustomers())
    }, [dispatch])

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                      className={classes.header}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Información del cliente
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <DetailCustomer data={dataCustomer}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBackIos/>}
                        onClick={handleRedirecListCustomer}
                    >
                        atras
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DetailCustomerPage
