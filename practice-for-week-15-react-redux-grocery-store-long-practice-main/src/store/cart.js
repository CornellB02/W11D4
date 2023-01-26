




export default function cartReducer(state={}, action) {
    const nextState = {...state}

    switch (action.type) {
        case POPULATE:
            nextState[action.cart.id] = action.cart
            return nextState
    }
}