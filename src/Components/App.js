import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ListCustomersPage from '../Pages/ListCustomersPage'
import DetailCustomerPage from '../Pages/DetailCustomerPage'
import {ThemeProvider} from '@material-ui/core'
import theme from "../themeConfig"
import store from "../store"
import {Provider} from "react-redux"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    divContent: {
        padding:'35px'
    }
});

function App() {

    const classes = useStyles();

    return (
        <div className={classes.divContent}>
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Route exact path="/" component={ListCustomersPage}/>
                        <Route exact path="/detalle-cliente/:id/" component={DetailCustomerPage}/>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        </div>
    )
}
export default App;
