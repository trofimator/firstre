import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCES,
    REQUEST_ROBOTS_FAILED
} from './Constants';


const initialStateSearch = ({
    searchField: ''
});

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

const initialStateRobots = {
    isPending:false,
    robots:[],
    error:''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPanding: true })
        case REQUEST_ROBOTS_SUCCES:
            return Object.assign({}, state, { robots: action.payload, isPanding: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPanding: false })
        default:
            return state;
    }
}