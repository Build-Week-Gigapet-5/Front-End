export const initialState = {
    name: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NAME":
            return {...state, name: action.payload};  
        default:
            return state;
    }
}

export default reducer