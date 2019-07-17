import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCES,
    REQUEST_ROBOTS_FAILED
} from './Constants';

import * as reducers from './reducer';

describe('search robots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should handle chnae searchfield', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,a
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})

