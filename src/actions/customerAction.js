import axios from "axios";

export const  loadCustomers = () => async dispatch => {
     axios.get('http://localhost:57210/api/Clientes/').then(response => {
         return dispatch({type: "LOAD_CUSTOMERS",payload: response.data})
     }).catch(error => {
         console.log(error)
     })
};
