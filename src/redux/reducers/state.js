let INITIAL_STATE = [
    "Data only for test"
]

const stateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INSERT":
            return [...state, action.item]
        default:
            return state
    }
}

export default stateReducer