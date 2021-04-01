import ACTION_TYPES from '../Actions/ActionsTypes';

const initialState = {
    list: []
}

export const LabourReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_APPCONFIG:
            return {
                ...state,
                list: [...action.payload]
            }
            break;
        case ACTION_TYPES.FETCH_TASK:
            console.warn("Reducer", action)
            return {
                ...state,
                list: [...action.payload]
            }
            break;
        case ACTION_TYPES.FETCH_USERDETAILS:
            return {
                ...state,
                list: [...action.payload]
            }
            break;
        case ACTION_TYPES.POST_CREATETASK:
            return {
                ...state,
                list: [...action.payload]
            }
            break;

        default:
            return state;
    }
}