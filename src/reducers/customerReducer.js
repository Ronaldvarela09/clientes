const initialProps = {
    customers: []
};

export const customer = (state = initialProps, action) => {
    switch (action.type) {
        case "LOAD_CUSTOMERS":
            return {...state, customers: action.payload}
        default:
            return state
    }
}
